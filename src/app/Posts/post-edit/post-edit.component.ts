import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {PostModel} from '../post.model';
import {NgForm} from '@angular/forms';
import {PostsService} from '../Posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postTitle = '';
  postContent = '';
  errorMessage = '';
  @Output() postCreated = new EventEmitter<PostModel>();

  constructor(public postsService: PostsService) { }

  savePost(post: NgForm) {
    if (post.value.postTitle.length === 0 && post.value.postContent.length === 0) {
      this.errorMessage = 'Empty Posts cannot be created';
      return;
    }
    this.errorMessage = '';
    const newPost = new PostModel(post.value.postTitle, post.value.postContent);
    this.postCreated.emit(newPost);
  }

  createPost(post: NgForm) {
    this.postsService.addPost(new PostModel(post.value.postTitle, post.value.postContent));
    post.resetForm();
  }

  ngOnInit() {
  }

}
