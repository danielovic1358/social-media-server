import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat as ChatSchema } from '../schemas/chat.schema';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(@Body() createChatDto: CreateChatDto): Promise<ChatSchema> {
    return this.chatService.create(createChatDto);
  }

  @Get()
  findAll(): Promise<ChatSchema[]> {
    return this.chatService.findAll();
  }

  @Delete()
  removeAll() {
    return this.chatService.removeAll()
  }
}
