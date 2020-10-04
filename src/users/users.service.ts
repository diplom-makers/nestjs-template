import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { reject } from 'ramda';

import { isNotDefined } from 'utils/ramda';

import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(crdnls): Promise<User> {
    return this.usersRepository.findOneOrFail(reject(isNotDefined, crdnls));
  }

  findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ username });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  findOneByUsernameOrEmail(usernameOrEmail: string): Promise<User> {
    return this.usersRepository.findOne({
      where: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    // .createQueryBuilder('user')
    // .where('username = :username OR email = :email', {
    //   username: usernameOrEmail,
    //   email: usernameOrEmail,
    // })
    // .getOne();
  }

  create(user: User): Promise<User> {
    const userInstance = this.usersRepository.create(user);
    return this.usersRepository.save(userInstance);
  }

  update(id: number, usersData: User): Promise<any> {
    return this.usersRepository.update(id, usersData);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
