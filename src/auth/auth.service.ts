import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from 'src/schemas/auth.schema';
import { hash, compare } from 'bcrypt';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private authModel: Model<AuthDocument>,
  ) {}

  async register(registerAuthDto: RegisterAuthDto) {
    const { password } = registerAuthDto;
    const plainToHash = await hash(password, 10);
    registerAuthDto = { ...registerAuthDto, password: plainToHash };
    return this.authModel.create(registerAuthDto);
  }

  async login(loginObject: LoginAuthDto) {
    const { email, password } = loginObject;
    const findUser = await this.authModel.findOne({ email });
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const data = findUser;

    return data;
  }
}
