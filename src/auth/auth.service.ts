import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compose, dissoc } from 'ramda';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(usernameOrEmail: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsernameOrEmail(
      usernameOrEmail,
    );

    if (user) {
      const isCorrectPassword = await user.comparePassword(pass);

      if (isCorrectPassword) {
        return compose(dissoc('pasword'))(user);
      }
    }

    return null;
  }

  async login(user: any) {
    const payload = compose(dissoc('password'))(user);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
