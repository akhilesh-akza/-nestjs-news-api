import { Injectable } from '@nestjs/common';
import { NewsObject } from './news.interface';

@Injectable()
export class NewsService {
  private newsList: NewsObject[] = [];

  createNews(newsArticle: NewsObject): {} {
    let status = 'Unable to create article';
    if (Object.keys(newsArticle).length != 0) {
      newsArticle.date = new Date(newsArticle.date);
      this.newsList.push(newsArticle);
      status = 'Article created!';
      return { message: `${status}` };
    } else {
      return { message: `${status}` };
    }
  }

  getNews(): NewsObject[] {
    return this.newsList;
  }

  findNews(searchKey): NewsObject[] {
    let filtered_list = this.newsList.filter((article) => {
      return (
        article.headline.toLowerCase().includes(searchKey.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchKey.toLowerCase())
      );
    });
    return filtered_list;
  }
}
