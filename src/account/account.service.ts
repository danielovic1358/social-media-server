import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from 'src/schemas/account.schema';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private postModel: Model<Account>) {}

  async create(createPostDto: CreateAccountDto): Promise<Account> {
    const createdAccount = new this.postModel(createPostDto);
    return createdAccount.save();
  }

  async findAll(): Promise<Account[]> {
    return this.postModel.find().exec();
  }

  async removeAll() {
    return this.postModel.deleteMany()
  }
}
