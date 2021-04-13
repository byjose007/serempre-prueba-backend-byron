
import { Product } from 'src/products/entity/product.entity';
import { Address } from 'src/shared/entities/address.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;  
  @Column()
  companyName: string;
  @Column()
  contactName: string;
  @Column()
  contactTitle: string;  
  @OneToMany(() => Product, (product) => product.supplier,{onDelete: 'CASCADE'})
  products: Product[];
  city: string;
  @Column()
  country: string;
  @Column()
  phone: string;
  @Column()
  postalCode: string;
  @Column()
  region: string;
  @Column()
  street: string;
}
