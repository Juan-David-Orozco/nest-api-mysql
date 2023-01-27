import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

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
  createPost( ) {
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
