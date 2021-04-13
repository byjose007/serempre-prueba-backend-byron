import { Product } from 'src/products/entity/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;
  @Column()
  name: string;
  @Column({ type: "bytea", nullable: false })
  picture: Buffer;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
  
}
