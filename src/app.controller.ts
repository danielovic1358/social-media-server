import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './app.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAll() {
    return this.postService.findAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.postService.findOne(Number(id))
  }
}
