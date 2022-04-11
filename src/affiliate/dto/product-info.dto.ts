import { CategoryInfoDto } from '.';

export class ProductInfoDto {
  id: string;
  name: string;
  description: string;
  oldMinPrice: number;
  oldMaxPrice: number;
  currentMinPrice: number;
  currentMaxPrice: number;
  discountRate: number;
  image: string;
  rating: number;
  provider: string;
  affiliateLink: string;
  productLink: string;
  category: CategoryInfoDto;
}
