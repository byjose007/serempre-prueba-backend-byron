import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from '../services/categories.service';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get(':id/products')
  @ApiOperation({
    summary:
      'btiene la información de una categoría, con sus productos asociados',
  })
  @ApiResponse({ status: 200, type: Object, description: 'categorías' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  findProducts(@Param('id') id: number) {
    return this.categoriesService.findProducs(id);
  }
}
