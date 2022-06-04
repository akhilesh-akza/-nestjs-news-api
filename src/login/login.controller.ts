import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';
import { CredentialsDTO } from './login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  loginHandler(@Body() credentials: CredentialsDTO, @Res() res: Response) {
    const isAuthorized = this.loginService.isAuthorized(credentials);
    const statusCode = isAuthorized ? 200 : 401;
    res.status(statusCode).json({
      authenticated: isAuthorized,
    });
  }
}
