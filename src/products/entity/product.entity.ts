import { Category } from 'src/categories/entity/category.entity';
import { Supplier } from 'src/suppliers/entity/suppliers.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  discontinued: boolean;
  @Column()
  productName: string;
  @Column()
  quantityPerUnit: string;
  @Column()
  reorderLevel: number;
  @ManyToOne(() => Supplier, (supplier) => supplier.products,{onDelete: 'CASCADE'})
  supplier: Supplier;
  @Column()
  unitPrice: number;
  @Column()
  unitsInStock: number;
  @Column()
  unitsOnOrder: number;
  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
