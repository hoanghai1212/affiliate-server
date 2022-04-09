import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, LoggerService, Scope } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { firstValueFrom } from 'rxjs';
import { ProductSeedInfoDto } from '../dto/product-seed-info.dto';

export interface IAffiliateService {
  getProductInfo(uri: string): Promise<ProductSeedInfoDto>;
}

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
      @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService) {}

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
     
      product.oldMinPrice = data.price_min_before_discount && data.price_min_before_discount > 0
        ? data.price_min_before_discount / 100000
        : null;
      product.oldMaxPrice = data.price_max_before_discount && data.price_max_before_discount > 0
        ? data.price_max_before_discount / 100000
        : null;
      product.currentMinPrice = data.price / 100000;
      product.currentMaxPrice = data.price_max ? data.price_max / 100000 : null;
      product.description = data.description;
      product.discountRate = +data.raw_discount / 100;
      product.rating = data.item_rating.rating_star;
      return product;
    } catch (err) {
      this.logger.error(`Error while fetching product information for shopee: ${err}`);
      return product;
    }
  }
}

@Injectable()
export class TikiService implements IAffiliateService {
  async getProductInfo(uri: string): Promise<ProductSeedInfoDto> {
    throw new Error('Method not implemented.' + uri);
  }
}
