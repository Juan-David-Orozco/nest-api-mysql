import { PostCategory } from '../enum'
import { IsString, IsBoolean, IsArray, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EnumToString } from 'src/helpers/enumToString';

export class CreatePostDto {

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  slug: string;

  @IsString()
  @ApiProperty()
  excerpt: string;

  @IsString()
  @ApiProperty()
  content: string;

  @IsEnum(PostCategory, {
    message: `Opcion invalida. Las opciones correctas son: ${EnumToString(PostCategory)}`
  })
  @ApiProperty()
  category: PostCategory;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty()
  tags: string[];

  @IsBoolean()
  @ApiProperty()
  status: boolean;

}