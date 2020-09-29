import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  create(User: User): Promise<User> {
    return this.userRepository.save(User);
  }

  update(id: number, UserData: User): Promise<any> {
    return this.userRepository.update(id, UserData);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
