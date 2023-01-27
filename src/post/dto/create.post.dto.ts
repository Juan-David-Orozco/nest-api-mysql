import { PostCategory } from '../enum'
import { IsString, IsBoolean, IsArray } from 'class-validator';

export class CreatePostDto {

  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  @IsString()
  category: PostCategory;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsBoolean()
  status: boolean;

}