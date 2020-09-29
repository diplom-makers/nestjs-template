import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Station } from '../station/station.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  // @OneToMany(
  //   type => Station,
  //   Station => Station.city,
  // )
  // stations: Station[];
}
