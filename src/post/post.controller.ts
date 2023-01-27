import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CreatePostDto, EditPostDto } from './dto';

@Controller('post')
export class PostController {

  @Get('/')
  getPosts(): string {
    return `returned posts`
  }

  @Get(':id')
  getPost( @Param('id', ParseIntPipe ) postId: number ) {
    console.log(typeof postId)
    return {
      message: `getPost by ${postId}`
    }
  }

  @Post()
  createPost( @Body() dto: CreatePostDto ) {
    return {
      message: `post created`, dto
    }
  }

  @Delete(':id')
  deletePost( @Param('id') postId: string ) {
    return {
      message: `post deleted ${postId}`
    }
  }

  @Put(':id')
  updatePost( @Param('id') postId: string, @Body() dto: EditPostDto ) {
    return {
      message: `post updated ${postId}`, dto
    }
  }

}
