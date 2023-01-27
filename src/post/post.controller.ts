import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreatePostDto } from './dto';

@Controller('post')
export class PostController {

  @Get('/')
  getPosts(): string {
    return `returned posts`
  }

  @Get(':id')
  getPost( @Param('id') postId: string ) {
    return {
      message: `getPost by ${postId}`
    }
  }

  @Post()
  createPost( @Body() dto: CreatePostDto ) {
    console.log(dto)
    return {
      message: `post created`
    }
  }

  @Delete(':id')
  deletePost( @Param('id') postId: string ) {
    return {
      message: `post deleted ${postId}`
    }
  }

  @Put(':id')
  updatePost( @Param('id') postId: string ) {
    return {
      message: `post updated ${postId}`
    }
  }

}
