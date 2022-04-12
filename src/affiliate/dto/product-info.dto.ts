import { CategoryInfoDto } from '.';
import { Provider } from '../constants';

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
  provider: Provider;
  affiliateLink: string;
  productLink: string;
  category: CategoryInfoDto;
}
