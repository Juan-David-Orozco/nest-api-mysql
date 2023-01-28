import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CreatePostDto, EditPostDto } from './dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

  constructor(private readonly postService: PostService) {}

  @Get('/')
  async getPosts() {
    const posts = await this.postService.getMany()
    return { msg: 'get posts', posts }
  }

  @Get(':id')
  async getPost( @Param('id') postId: number ) {
    const post = await this.postService.getOne(postId)
    return { msg: 'get post', post }
  }

  @Post()
  async createPost( @Body() dto: CreatePostDto ) {
    const newPost = await this.postService.createOne(dto)
    return { msg: 'create post', newPost }
  }

  @Delete(':id')
  async deletePost( @Param('id') postId: number ) {
    const deletedPost = await this.postService.deleteOne(postId)
    return { msg: 'delete post', deletedPost }
  }

  @Put(':id')
  async updatePost( @Param('id') postId: number, @Body() dto: EditPostDto ) {
    const updatedPost = await this.postService.editOne(postId, dto)
    return { msg: 'update post', updatedPost }
  }

}
