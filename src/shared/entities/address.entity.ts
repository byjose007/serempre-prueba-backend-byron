import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  city: string;
  @Column()
  country: string;
  @Column()
  phone: string;
  @Column()
  postalCode: number;
  @Column()
  region: string;
  @Column()
  street: string;
}
