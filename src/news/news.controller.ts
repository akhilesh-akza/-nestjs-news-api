import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { NewsObject } from './news.interface';
import { NewsService } from './news.service';
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService){};

  @Post()
  @HttpCode(200)
  addNews(@Body() newsArticle: NewsObject): {} {
    return this.newsService.createNews(newsArticle);      
  }

  @Get()
  getNews(): NewsObject[] {
      return this.newsService.getNews();
  }
}
