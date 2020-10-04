import {
  Controller,
  Get,
  Patch,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from 'pipes/ValidationPipe';
import { createUserValidationSchema } from 'utils/validationSchemes/user';
import { isDefined } from 'utils/ramda';

import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<User[]> {
    console.log(bcrypt);
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  // @UsePipes(new ValidationPipe(createUserValidationSchema))
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<User | BadRequestException> {
    const res = await this.usersService.findOneByEmail(createUserDto.email);

    if (isDefined(res)) {
      throw new BadRequestException({
        message: 'Validation failed',
        errors: { email: 'This email has been taken' },
      });
    }
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(Number(id));
  }
}
