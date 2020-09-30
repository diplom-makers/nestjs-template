import { ManyToOne, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ nullable: false })
  password: string;

  // @OneToMany(
  //   type => Station,
  //   Station => Station.city,
  // )
  // stations: Station[];
}
