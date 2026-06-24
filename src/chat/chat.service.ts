import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from 'src/schemas/chat.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private postModel: Model<Chat>) {}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const createdPost = new this.postModel(createChatDto);
    return createdPost.save();
  }

  async findAll(): Promise<Chat[]> {
    return this.postModel.find().exec();
  }

  async removeAll() {
    return this.postModel.deleteMany({})
  }
}
