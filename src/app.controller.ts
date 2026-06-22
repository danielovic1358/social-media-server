import { Controller, Get} from '@nestjs/common';
import { PostService } from './app.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts()
  }
}
