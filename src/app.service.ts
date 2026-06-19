import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  private socialplatform = {
    posts: [
      {postid: 1, postcaption: "Ich war am Gardasee.", imageURL: 'http://localhost:3000/pictureposts/post1.jpg'},
      {postid: 2, postcaption: "Schöner Sonnenuntergang.", imageURL: 'http://localhost:3000/pictureposts/post2.jpg'},
      {postid: 3, postcaption: "Ein tolles Frühstück.", imageURL: 'http://localhost:3000/pictureposts/post3.jpg'},
      {postid: 4, postcaption: "Warum hat Erdbeere Erdbeermann mit Banane betrogen? 😢😭", imageURL: 'http://localhost:3000/pictureposts/post4.png'}
    ],
    accounts: [
      {accountid: 1, accountname: "@holgerpodowski", profileURL: 'http://localhost:3000/pictureposts/account1.png'},
      {accountid: 2, accountname: "@emilia1273", profileURL: 'http://localhost:3000/pictureposts/account2.png'},
      {accountid: 3, accountname: "@aistoryimages", profileURL: 'http://localhost:3000/pictureposts/account3.png'}
    ]
  }

  getPosts() {
    return this.socialplatform
  }
}