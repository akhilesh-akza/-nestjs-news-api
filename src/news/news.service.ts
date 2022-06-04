import { BadRequestException, Injectable } from '@nestjs/common';
import { NewsObject } from './news.interface';

@Injectable()
export class NewsService {
    private newsList: NewsObject[] = [];

    createNews(newsArticle: NewsObject): {} {
        let status = 'FAILURE';
        if (Object.keys(newsArticle).length != 0) {
            newsArticle.date = new Date(newsArticle.date);
            this.newsList.push(newsArticle);
            status = 'SUCCESS';
            return {message:`${status}`};
        } else {
            return {message:`${status}`};
        }

    };

    getNews(): NewsObject[] {
        return this.newsList;
    }
}
