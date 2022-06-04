import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { LoginModule } from './login/login.module';
import { logger } from './middleware/logger.middleware';

@Module({
  imports: [NewsModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(
        { path: 'news', method: RequestMethod.POST },
        { path: 'login', method: RequestMethod.POST },
      );
  }
}
