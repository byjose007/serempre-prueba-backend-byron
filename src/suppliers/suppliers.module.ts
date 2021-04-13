import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppliersController } from './controllers/suppliers.controller';
import { Supplier } from './entity/suppliers.entity';
import { SuppliersService } from './services/suppliers.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Supplier])
  ],
  controllers: [SuppliersController],
  providers: [SuppliersService]
})
export class SuppliersModule {}
