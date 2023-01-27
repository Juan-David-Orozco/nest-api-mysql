import { Injectable } from '@nestjs/common';
import { CreatePostDto, EditPostDto } from './dto';

@Injectable()
export class PostService {

  getMany() {
    return { msg: `getMany` }
  }

  getOne(id: number) {
    return { msg: `getOne ${id}` }
  }

  createOne(dto: CreatePostDto) {
    return { msg: `createOne`, dto }
  }

  editOne(id: number, dto: EditPostDto) {
    return { msg: `editOne ${id}`, dto }
  }

  deleteOne(id: number) {
    return { msg: `deleteOne ${id}` }
  }

}
