import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';
import { CredentialsDTO } from './login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  // @Res({ passthrough: true }) res: Response
  // fixes the the Express response bypassing the interceptor

  @Post()
  loginHandler(
    @Body() credentials: CredentialsDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const isAuthorized = this.loginService.isAuthorized(credentials);
    const statusCode = isAuthorized ? 200 : 401;
    res.status(statusCode);
    return {
      authenticated: isAuthorized,
    };
  }
}
