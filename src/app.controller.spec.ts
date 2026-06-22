import { describe, beforeEach, it } from 'node:test';
import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './app.controller';
import { PostService } from './app.service';

describe('AppController', () => {
  let appController: PostController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService],
    }).compile();

    appController = app.get<PostController>(PostController);
  });
});
