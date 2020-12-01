import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recruiter {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;
}
