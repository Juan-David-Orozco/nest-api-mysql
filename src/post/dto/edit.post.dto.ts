import { CreatePostDto } from './create.post.dto';
import { OmitType, PartialType } from '@nestjs/swagger'

export class EditPostDto extends PartialType(
  //Se ignora el parametro slug enviado desde el cliente
  OmitType(CreatePostDto, ['slug'] as const) 
) {}