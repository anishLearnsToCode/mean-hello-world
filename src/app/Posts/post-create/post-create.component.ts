import { Component, OnInit } from '@angular/core';
import {PostsService} from '../Posts.service';
import {PostModel} from '../post.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  createPost(post: NgForm) {
    this.postsService.addPost(new PostModel(null, post.value.postTitle, post.value.postContent));
    post.resetForm();
  }

}
