import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { NewsArticleDTO } from './news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  addNews(@Body() newsArticle: NewsArticleDTO): {} {
    return this.newsService.createNews(newsArticle);
  }

  @Get()
  findNews(
    @Query('searchKey') searchKey: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    if (searchKey) {
      const articles = this.newsService.findNews(searchKey);
      if (articles.length === 0) {
        res.status(HttpStatus.NOT_FOUND);
        return {
          message: `0 articles with keyword:${searchKey} was found`,
        };
      } else {
        return articles;
      }
    } else {
      return this.newsService.getNews();
    }
  }
}
