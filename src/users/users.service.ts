import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() // @InjectRepository(User) private usersRepository: Repository<User>,
  {
    this.users = [
      {
        id: 1,
        username: 'john',
        password: 'changeme',
        age: 21,
      },
      {
        id: 2,
        username: 'chris',
        password: 'secret',
      },
    ];
  }

  // findAll(): Promise<User[]> {
  //   return this.usersRepository.find();
  // }

  // findOne(id: number): Promise<User> {
  //   return this.usersRepository.findOne(id);
  // }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  // create(User: User): Promise<User> {
  //   return this.usersRepository.save(User);
  // }

  // update(id: number, UserData: User): Promise<any> {
  //   return this.usersRepository.update(id, UserData);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}
