import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Company {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 100, nullable: false })
  name: string;

  @OneToOne(() => Legacy)
  @JoinColumn()
  legacy: Legacy;

  @OneToMany(() => CompanyValue, (value) => value.company)
  values: [CompanyValue];

}

@Entity()
export class Legacy {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 500, nullable: false })
  description: string;

}

@Entity()
export class CompanyValue {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 500, nullable: false })
  description: string;

  @ManyToOne(() => Company, (company) => company.values)
  company: Company;

}
