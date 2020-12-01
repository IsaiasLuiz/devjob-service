import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Location {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  state: string;

  @Column()
  isRemoteWork: boolean;

}
