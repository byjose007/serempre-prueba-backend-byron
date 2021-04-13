import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from '../entity/suppliers.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier) private supplierRepo: Repository<Supplier>,
  ) {}

  findOne(id: number) {
    return this.supplierRepo.findOne(id);
  }

  findOneName(name: string) {
    return this.supplierRepo.findOne({ where: { companyName: name } });
  }

  findProducs(id: number) {
    return this.supplierRepo.findOne(id, { relations: ['products'] });
  }

  async remove(id: number) {
    await this.supplierRepo.delete(id);
    return true;
  }
}
