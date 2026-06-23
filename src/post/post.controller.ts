import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostSchema } from '../schemas/post.schema';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<PostSchema> {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll(): Promise<PostSchema[]> {
    return this.postService.findAll();
  }
}
