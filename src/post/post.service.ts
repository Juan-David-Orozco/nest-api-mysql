import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostDto, EditPostDto } from './dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ){}

  async getMany(): Promise<Post[]> {
    return await this.postRepository.find()
  }

  async getOne(id: number) {
    const post = await this.postRepository.findOne({where: {id: id}})
    if (!post) throw new NotFoundException()
    return post
  }

  async createOne(dto: CreatePostDto) {
    const newPost = this.postRepository.create(dto as any)
    const savedPost = await this.postRepository.save(newPost)
    return savedPost
  }

  async editOne(id: number, dto: EditPostDto) {
    const post = await this.postRepository.findOne({where: {id: id}})
    if (!post) throw new NotFoundException('Post Not Found')
    const editedPost = Object.assign(post, dto)
    return await this.postRepository.save(editedPost)
  }

  async deleteOne(id: number) {
    return await this.postRepository.delete(id)
  }

}
