import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AffiliateService } from './affiliate.service';
import { CreateAffiliateDto } from './dto/create-affiliate.dto';
import { UpdateAffiliateDto } from './dto/update-affiliate.dto';

@ApiTags('Affiliate')
@Controller('affiliate')
export class AffiliateController {
  constructor(private readonly affiliateService: AffiliateService) {}

  @Post()
  create(@Body() createAffiliateDto: CreateAffiliateDto) {
    return this.affiliateService.create(createAffiliateDto);
  }

  @Get()
  findAll() {
    throw new Error('not implemented');
    return this.affiliateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.affiliateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAffiliateDto: UpdateAffiliateDto,
  ) {
    return this.affiliateService.update(+id, updateAffiliateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affiliateService.remove(+id);
  }
}
