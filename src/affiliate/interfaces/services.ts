import { ProductSeedInfoDto } from '../dto';

export interface IAffiliateService {
  getProductInfo(uri: string): Promise<ProductSeedInfoDto>;
}
