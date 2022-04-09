import { Injectable } from '@nestjs/common';
import { AffiliateDomain } from '../constants';
import { IAffiliateService } from '../interfaces';
import {
  LazadaService,
  ShopeeService,
  TikiService,
} from '../services/affiliate-provider.service';

@Injectable()
export class AffiliateServiceFactory {
  constructor(
    private readonly tikiService: TikiService,
    private readonly lazadaService: LazadaService,
    private readonly shopeeService: ShopeeService,
  ) {}

  public getAffiliateService(uri: string): IAffiliateService {
    const domain = uri.split('/')[2] as AffiliateDomain;

    switch (domain) {
      case AffiliateDomain.Tiki:
        return this.tikiService;
      case AffiliateDomain.Lazada:
        return this.lazadaService;
      case AffiliateDomain.Shopee:
        return this.shopeeService;
      default:
        throw new Error('Unknown affiliate service');
    }
  }
}
