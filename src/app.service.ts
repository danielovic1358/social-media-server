import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  private socialplatform = {
    posts: [
      {postid: 1, postcaption: "Ich war am Gardasee.", imageURL: 'http://localhost:3000/pictureposts/post1.jpg'},
      {postid: 2, postcaption: "Schöner Sonnenuntergang.", imageURL: 'http://localhost:3000/pictureposts/post2.jpg'}
    ],
    accounts: [
      {accountid: 1, accountname: "@holgerpodowski", accountURL: 'http://localhost:3000/pictureposts/account1.png'}
    ]
  }

  getPosts() {
    return this.socialplatform
  }
}