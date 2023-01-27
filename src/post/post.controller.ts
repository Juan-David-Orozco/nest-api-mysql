import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CreatePostDto, EditPostDto } from './dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

  constructor(private readonly postService: PostService) {}

  @Get('/')
  getPosts() {
    return this.postService.getMany()
  }

  @Get(':id')
  getPost( @Param('id', ParseIntPipe ) postId: number ) {
    return this.postService.getOne(postId)
  }

  @Post()
  createPost( @Body() dto: CreatePostDto ) {
    return this.postService.createOne(dto)
  }

  @Delete(':id')
  deletePost( @Param('id') postId: number ) {
    return this.postService.deleteOne(postId)
  }

  @Put(':id')
  updatePost( @Param('id') postId: number, @Body() dto: EditPostDto ) {
    return this.postService.editOne(postId, dto)
  }

}
