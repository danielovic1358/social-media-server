import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import { AccountModule } from './account/account.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from 'path'
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@grapecode.de:27017/dsm?authSource=admin',), PostModule, AccountModule, ChatModule, ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'public'), }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
