import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { NewsArticleDTO } from './new.dto';
import { NewsService } from './news.service';
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @HttpCode(200)
  addNews(@Body() newsArticle: NewsArticleDTO): {} {
    return this.newsService.createNews(newsArticle);
  }

  @Get()
  getNews() {
    return this.newsService.getNews();
  }
}
