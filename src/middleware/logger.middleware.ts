import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Incoming-middleware] Request to ${req.route.path}`);
    console.log(
      `[Incoming-middleware] User-Agent : `,
      req.headers['user-agent'],
    );
    console.log('[Outgoing-middleware]', res.req.body);

    next();
  }
}
