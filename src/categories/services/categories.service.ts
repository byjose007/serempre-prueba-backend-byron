import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entity/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  findProducs(id: number) {
    return this.categoryRepo.findOne(id, { relations: ['products'] });
  }

  findOneName(name: string) {
    return this.categoryRepo.findOne({ where: { categoryName: name } });
  }

}
