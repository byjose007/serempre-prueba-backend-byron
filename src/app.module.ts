import { Module } from '@nestjs/common';

import { AppService } from './app.service';

import { SuppliersModule } from './suppliers/suppliers.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'serempre',
      password: 'postgres',
      database: 'serempre_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    SuppliersModule, ProductsModule, CategoriesModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

