import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CategoriesService } from 'src/categories/services/categories.service';
import { SuppliersService } from 'src/suppliers/services/suppliers.service';
import { Product } from '../entity/product.entity';
import { ProductsService } from '../services/products.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private suppliersServices: SuppliersService,
  ) {}

  @Get(':id/allProducts')
  @ApiOperation({
    summary:
      ' Obtiene el listado de productos con su categoría ordenados de forma (as)(des)cendete por id',
  })
  @ApiResponse({ status: 200, type: Object, description: 'productos' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  async allProducts(
    @Query('page') page: number = 1,
    @Query('sizePage') sizePage: number = 1,

  ): Promise<Pagination<Product>> {
    sizePage = sizePage > 100 ? 100 : sizePage; 


    return this.productsService.findAllPaginate({limit: page, page: sizePage})
  }

 

  @Get(':id/search')
  @ApiOperation({
    summary:
      '  Permite realizar una búsqueda por nombre de producto o categoría o proveedor (requiere amenos un filtro)',
  })
  @ApiResponse({ status: 200, type: Object, description: 'productos' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  async searchProducts(
    @Query('nameProducto') nameProducto: string,
    @Query('nameCategoria') nameCategoria: string,
    @Query('nameSupplier') nameSupplier: string,
  ) {
    try {
      const query: any = {};
      if (nameProducto) {
        query.produc = nameProducto;
      }

      if (nameCategoria) {
        const category = await this.categoriesService.findOneName(
          nameCategoria,
        );
        query.category = category;
      }
      if (nameSupplier) {
        const supplier = await this.suppliersServices.findOneName(nameSupplier);
        query.supplier = supplier;
      }

      const products = await this.productsService.search(query);
    } catch (error) {
      return error;
    }
  }

  @Get(':id/products')
  @ApiOperation({
    summary: 'Obtiene la información un producto con su categoría y proveedor',
  })
  @ApiResponse({ status: 200, type: Object, description: 'producto' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  async findProducts(@Res() res, @Param('id') id: number) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException('Producto no existente!');
    }
    return res.status(HttpStatus.OK).json(product);
  }

  @Post()
  @ApiOperation({
    summary: '  Permite crear un nuevo producto con su categoría y proveedor',
  })
  @ApiResponse({ status: 201, description: 'El registro ha sido creado' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() body: any) {
    return this.productsService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: '  Permite actualizar los datos de un producto' })
  @ApiResponse({ status: 201, description: 'El registro ha sido actualizado' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(@Res() res, @Param('id') id: number, @Body() body: any) {
    const product = await this.productsService.update(id, body);
    if (!product) {
      throw new NotFoundException('No se puedo actualizar!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Se actualiza correctamente',
      product,
    });
  }
}
