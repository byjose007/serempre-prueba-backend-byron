import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entity/product.entity';
import {
    paginate,
    Pagination,
    IPaginationOptions,
  } from 'nestjs-typeorm-paginate';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
   
  ) {}



  async findAllPaginate(options: IPaginationOptions): Promise<Pagination<Product>> {
    const queryBuilder = this.productsRepo.createQueryBuilder('c');
    queryBuilder.orderBy('c.id', 'DESC'); 


    return paginate<Product>(queryBuilder, options);
  }


  findOne(id: number) {
    return this.productsRepo.findOne(id, {
      relations: ['category', 'supplier'],
    });
  }

  search(query:any){
      return this.productsRepo.find({
        select: ["productId", "productName"],
        relations: ["category", "supplier"],
        where: query,
        order: {
            name: "ASC",
            id: "DESC"
        },
        
     
  });
}

 

  async remove(id: number) {
    await this.productsRepo.delete(id);
    return true;
  }

  findAll() {
    return this.productsRepo.find();
  }

  create(body: any) {
    let newProduct = new Product();
    newProduct = body;
    return this.productsRepo.save(newProduct);
  }

  async update(id: number, body: any) {
    const product = await this.productsRepo.findOne(id);
    this.productsRepo.merge(product, body);
    return this.productsRepo.save(product);
  }
}
