import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  private postInformation = [
    {
      id: 1,
      description: "Ich war am Gardasee!",
      imageURL: 'http://localhost:3000/pictureposts/test1.jpg',
    }
  ]

  findAll() {
    return this.postInformation
  }

  findOne(id: number) {
    return this.postInformation.find(post => post.id === id);
  }
}