import { Injectable } from '@nestjs/common';
import { CredentialsType } from './login.interface';

@Injectable()
export class LoginService {
  private CREDENTIALS = {
    email: 'intern@revyrieglobal.com',
    password: 'intern@123',
  };

  isAuthorized({ email, password }: CredentialsType): boolean {
    if (
      email === this.CREDENTIALS.email &&
      password === this.CREDENTIALS.password
    ) {
      return true;
    } else {
      return false;
    }
  }
}
