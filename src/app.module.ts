import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [NewsModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
