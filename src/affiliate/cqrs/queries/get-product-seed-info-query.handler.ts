import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ProductSeedInfoDto } from "src/affiliate/dto/product-seed-info.dto";
import { AffiliateServiceFactory } from "src/affiliate/factories/affiliate-provider-factory";
import { GetProductSeedInfoQuery } from "./get-product-seed-info.query";

@QueryHandler(GetProductSeedInfoQuery)
export class GetProductSeedInfoQueryHandler implements IQueryHandler<GetProductSeedInfoQuery, ProductSeedInfoDto> {
    constructor(private readonly affiliateServiceFactory: AffiliateServiceFactory) {}

    async execute(query: GetProductSeedInfoQuery) {
        const providerService = this.affiliateServiceFactory.getAffiliateService(query.productLink);
        return await providerService.getProductInfo(query.productLink);
    }
}