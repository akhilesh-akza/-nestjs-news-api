import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { response } from 'express';
import { map, Observable, tap } from 'rxjs';

export interface Response<T> {
  response: T;
}

// To future me: Naming sense is bad, read other people's code.

@Injectable()
export class ResponseFormatInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('[Request-Interceptor] Request unmodified');

    return next.handle().pipe(
      map((data) => {
        console.log('[Response-Interceptor] Modified ResponseObject');
        return {
          statusCode: context.switchToHttp().getResponse().statusCode,
          response: data,
        };
      }),
    );
  }
}
