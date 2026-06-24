import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account as AccountSchema } from '../schemas/account.schema';

@Controller('account')
export class AccountController {
  constructor(private readonly AccountService: AccountService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto): Promise<AccountSchema> {
    return this.AccountService.create(createAccountDto);
  }

  @Get()
  findAll(): Promise<AccountSchema[]> {
    return this.AccountService.findAll();
  }

  @Delete()
  removeAll() {
    return this.AccountService.removeAll()
  }
}
