import { Injectable, Inject } from '@nestjs/common';
import { User } from './../entities/user.entity';
import { UserDto } from './../dtos/users.dtos';
import { PasswordEncryptor } from './../interfaces/password-encryptor.interface';
import * as winston from 'winston';

@Injectable()
export class UsersService {
  constructor(
    @Inject('PASSWORD_ENCRYPTOR')
    private readonly passwordEncryptor: PasswordEncryptor,
  ) {}

  private counterId = 0;
  private users: User[] = [];
  // Configuración de Winston para escribir en un archivo log
  private readonly logger = winston.createLogger({
    transports: [new winston.transports.File({ filename: 'solid-login.log' })],
  });

  async login(username: string, password: string) {
    const user = this.findUser(username);
    if (!user) {
      return {
        message: 'usuario o password incorrecto1',
      };
    }
    const hashedPassword = await this.passwordEncryptor.encrypt(password);
    this.logger.info(`login-pass: ${hashedPassword}`);
    if (hashedPassword !== user.password) {
      return {
        message: 'usuario o password incorrecto2',
      };
    }
    return {
      message: 'acceso correcto',
    };
  }

  async register(payload: UserDto) {
    this.counterId = this.counterId + 1;
    const encryptedPassword = await this.passwordEncryptor.encrypt(
      payload.password,
    );

    const newUser = {
      id: this.counterId,
      name: payload.name,
      user: payload.user,
      password: encryptedPassword,
      //...payload,
    };
    this.logger.info(`register-pass: ${encryptedPassword}`);
    this.users.push(newUser);
    this.logger.info(newUser);
    return newUser;
  }
  findUser(user: string) {
    return this.users.find((item) => item.user === user);
  }
}
