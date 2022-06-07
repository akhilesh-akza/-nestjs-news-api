import { IsDateString, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class NewsArticleDTO {
  @IsNotEmpty()
  @IsString()
  headline: String;

  @IsNotEmpty()
  summary: String;

  @IsDateString()
  date: Date;

  @IsUrl()
  image: String;
}
