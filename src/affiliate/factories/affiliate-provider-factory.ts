import { Injectable, Scope } from "@nestjs/common";
import { IAffiliateService, TikiService, LazadaService, ShopeeService } from "../services/affiliate-provider.service";

@Injectable()
export class AffiliateServiceFactory {
  constructor(
    private readonly tikiService: TikiService,
    private readonly lazadaService: LazadaService,
    private readonly shopeeService: ShopeeService
    ) {}
  public getAffiliateService(uri: string): IAffiliateService {
    const domain = uri.split('/')[2];
    switch (domain) {
      case 'tiki.vn':
        return this.tikiService;
      case 'lazada.vn':
        return this.lazadaService
      case 'shopee.vn':
        return this.shopeeService;
      default:
        throw new Error('Unknown affiliate service');
    }
  }
}