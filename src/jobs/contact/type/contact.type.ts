import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contact {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 50 })
  phone: string;

  @Column({ length: 50 })
  mail: string;

  @Column({ length: 50 })
  whastapp: string;

  @Column({ length: 50 })
  linkedin: string;

}
