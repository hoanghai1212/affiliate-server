export class ProductSeedInfoDto {
  name: string;
  description: string;
  oldMinPrice: number | null;
  oldMaxPrice: number | null;
  currentMinPrice: number;
  currentMaxPrice: number | null;
  discountRate: number | null;
  image: string;
  rating: number;
  provider: string;
  affiliateLink: string;
  productLink: string;
}
