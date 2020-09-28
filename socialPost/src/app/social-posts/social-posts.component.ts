import { Component, OnInit } from '@angular/core';
import { Post } from './../interface/post';
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: 'Hello', thought: 'My name is Andrew!' },
    { title: 'Goodbye', thought: 'It was great seeing you!' },
    {
      title: 'Life',
      thought: 'Spend time with those you love!',
    },
  ];
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  handleSubmit(post: Post): void {
    this.posts.push(post);
    this.show = false;
  }
  handleDelete(i: number) {
    this.posts.splice(i, 1);
  }
  showForm(): void {
    this.show = true;
  }
}
