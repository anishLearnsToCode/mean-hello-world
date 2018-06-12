import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: PostModel[] = [
    new PostModel('Title Heading', 'this is the sample text'),
    new PostModel('Heading 2', 'This content is amazing')
  ];

  constructor() { }

  ngOnInit() {
  }

}
