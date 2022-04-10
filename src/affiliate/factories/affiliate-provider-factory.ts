import { BadRequestException, Injectable } from '@nestjs/common';
import { AffiliateDomain } from '../constants';
import { IAffiliateService } from '../interfaces';
import {
  LazadaService,
  ShopeeService,
  TikiService,
} from '../services/affiliate-provider.service';

@Injectable()
export class AffiliateServiceFactory {
  SERVICE_MAP = {
    [AffiliateDomain.TIKI]: this.tikiService,
    [AffiliateDomain.LAZADA]: this.lazadaService,
    [AffiliateDomain.SHOPEE]: this.shopeeService,
  };

  constructor(
    private readonly tikiService: TikiService,
    private readonly lazadaService: LazadaService,
    private readonly shopeeService: ShopeeService,
  ) {}

  public getAffiliateService(uri: string): IAffiliateService {
    const domain = uri.replace('www.', '').split('/')[2] as AffiliateDomain;

    const result = this.SERVICE_MAP[domain];

    if (!result) {
      throw new BadRequestException(`${domain} is not supported`);
    }

    return result;
  }
}
