import { Location } from './../../location/type/location.type';
import { Company } from './../../company/type/company.type';
import { Recruiter } from './../../recruiter/type/recruiter.type';
import { Contact } from './../../contact/type/contact.type';
import { Remuneration } from './../../remuneration/type/remuneration.type';
import { Responsibility } from './../../responsibility/type/responsibility.type';
import { Technology } from './../../technology/type/technology.type';
import { Qualification } from './../../qualification/type/qualification.type';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Job {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 100, nullable: false })
  title: string;

  @Column({ length: 500, nullable: false })
  description: string;

  @OneToMany(() => Qualification, (qualification) => qualification.job)
  qualifications: [Qualification];

  @OneToMany(() => Technology, (technology) => technology.job)
  technologies: [Technology];

  @OneToMany(() => Responsibility, (responsibility) => responsibility.job)
  responsibilities: [Responsibility];

  @OneToOne(() => Company)
  @JoinColumn()
  company: Company;

  @OneToMany(() => Remuneration, (remuneration) => remuneration.job)
  remunerations: [Remuneration];

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @OneToOne(() => Contact)
  contact: Contact;

  @OneToOne(() => Recruiter)
  recruiter: Recruiter;

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
