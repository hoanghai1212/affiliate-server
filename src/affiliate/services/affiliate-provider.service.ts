import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Inject,
  Injectable,
  LoggerService,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { firstValueFrom } from 'rxjs';
import { Provider } from '../constants';
import { ProductSeedInfoDto } from '../dto';
import { IAffiliateService } from '../interfaces';

@Injectable()
export class LazadaService implements IAffiliateService {
  async getProductInfo(uri: string): Promise<ProductSeedInfoDto> {
    throw new Error('Method not implemented.' + uri);
  }
}

@Injectable()
export class ShopeeService implements IAffiliateService {
  private baseUrl = 'https://shopee.vn/api/v4';

  constructor(
    private readonly httpService: HttpService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  async getProductInfo(uri: string): Promise<ProductSeedInfoDto> {
    const product = {} as ProductSeedInfoDto;
    product.provider = 'shopee';
    product.productLink = uri;
    try {
      const uriParts = uri.split('.');
      if (uriParts.length < 4) {
        return product;
      }

      const shopId = uriParts[2];
      const itemId = uriParts[3].split('?')[0];
      const requestUrl = `${this.baseUrl}/item/get?itemid=${itemId}&shopid=${shopId}`;
      const response = await firstValueFrom(this.httpService.get(requestUrl));
      const { data, error, error_msg } = response.data;

      if (error) {
        this.logger.error(`${error} - ${error_msg}`);
        return product;
      }

      product.oldMinPrice =
        data.price_min_before_discount && data.price_min_before_discount > 0
          ? data.price_min_before_discount / 100000
          : null;
      product.oldMaxPrice =
        data.price_max_before_discount && data.price_max_before_discount > 0
          ? data.price_max_before_discount / 100000
          : null;
      product.currentMinPrice = data.price / 100000;
      product.currentMaxPrice = data.price_max ? data.price_max / 100000 : null;
      product.description = data.description;
      product.discountRate = +data.raw_discount / 100;
      product.rating = data.item_rating.rating_star;
      return product;
    } catch (err) {
      this.logger.error(
        `Error while fetching product information for shopee: ${err}`,
      );
      return product;
    }
  }
}

@Injectable()
export class TikiService implements IAffiliateService {
  private baseUrl = 'https://tiki.vn/api/v2/products';
  private SPID_REGEXP = new RegExp('spid=[0-9]*');

  constructor(
    private readonly httpService: HttpService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  async getProductInfo(uri: string): Promise<ProductSeedInfoDto> {
    const requestUrl = this.createRequestUrl(uri);

    const product = {} as ProductSeedInfoDto;
    product.provider = Provider.Tiki;
    product.productLink = uri;

    try {
      const { data, status, statusText } = await firstValueFrom(
        this.httpService.get(requestUrl),
      );

      if (status !== 200) {
        this.logger.error(
          `Error while fetching product information for tiki: ${status} - ${statusText}`,
        );
        return product;
      }

      product.name = data.name;
      product.description = data.description;
      product.currentMinPrice = +data.price;
      product.discountRate = data.discount_rate / 100;
      product.image =
        data.images?.[0].base_url ||
        data.images?.[0].large_url ||
        data.images?.[0].medium_url ||
        data.images?.[0].small_url;
      product.rating = data.rating_average;

      return product;
    } catch (error) {
      this.logger.error(
        `Error while fetching product information for tiki: ${error}`,
      );
      throw new Error('Failed to get product info');
    }
  }

  private createRequestUrl(uri: string): string {
    const productId = uri.split('.')?.[1]?.split('-')?.pop()?.slice(1);

    const spid = uri?.match(this.SPID_REGEXP);

    if (!productId || !spid) {
      throw new BadRequestException('Invalid product url');
    }

    return `${this.baseUrl}/${productId}?platform=web&spid=${spid}`;
  }
}
