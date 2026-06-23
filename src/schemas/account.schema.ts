import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {
  @Prop()
  accountid: number;

  @Prop()
  accountname: string;

  @Prop()
  profileURL: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
