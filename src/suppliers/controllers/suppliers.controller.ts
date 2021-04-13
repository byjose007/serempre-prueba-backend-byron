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
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuppliersService } from '../services/suppliers.service';

@ApiTags('Suppliers')
@Controller('suppliers')
export class SuppliersController {
  constructor(private supplierService: SuppliersService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene la información de un proveedor' })
  @ApiResponse({ status: 200, type: Object, description: 'producto' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  async findOne(@Res() res, @Param('id') id: number) {
    const supplier = await this.supplierService.findOne(id);
    if (!supplier) {
      throw new NotFoundException('no existe el proveedor!');
    }
    return res.status(HttpStatus.OK).json(supplier);
  }

  

  @Get(':id/products')
  @ApiOperation({
    summary: 'Obtiene la información de un proveedor con sus productos',
  })
  @ApiResponse({ status: 200, type: Object, description: 'producto' })
  @ApiResponse({ status: 404, description: 'Error al obtener los datos' })
  async findProducts(@Res() res, @Param('id') id: number) {
    const supplier = await this.supplierService.findProducs(id);
    if (!supplier) {
      throw new NotFoundException('no existe el proveedor!');
    }
    return res.status(HttpStatus.OK).json(supplier);
  }



  @Delete(':id')
  @ApiOperation({ summary: 'Permite eliminar un proveedor' })
  @ApiResponse({ status: 201, description: 'Datos Eliminados' })
  async delete(@Res() res, @Param('id') id: number) {
    const supplierDeleted = await this.supplierService.remove(id);
    if (!supplierDeleted) {
      throw new NotFoundException('no existe el proveedor!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Customer Deleted Successfully',
      supplierDeleted,
    });
  }
}
