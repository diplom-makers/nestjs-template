import {
  Controller,
  Get,
  Patch,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, createUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(Number(id));
  }
}
