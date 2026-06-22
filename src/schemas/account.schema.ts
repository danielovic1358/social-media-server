import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Accounts>;

@Schema()
export class Accounts {
  @Prop()
  accountid: number;

  @Prop()
  accountname: string;

  @Prop()
  profileURL: string;
}

export const PostSchema = SchemaFactory.createForClass(Accounts);
