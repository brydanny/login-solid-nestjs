import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './../services/users.service';
import { UserDto } from './../dtos/users.dtos';
@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}
  @Post('register')
  register(@Body() payload: UserDto) {
    return this.usersServices.register(payload);
  }
  @Post('login')
  login(@Body('user') user: string, @Body('password') password: string) {
    return this.usersServices.login(user, password);
  }
}
