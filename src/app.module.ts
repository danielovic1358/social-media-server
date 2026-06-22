import { Module } from '@nestjs/common';
import { PostController } from './app.controller';
import { PostService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@grapecode.de:27017/dsm?authSource=admin',
    ),
    PostModule,
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
