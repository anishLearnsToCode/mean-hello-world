import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {PostModel} from '../post.model';

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

  constructor() {
    // this.postTitle = 'Sample Title';
    // this.postContent = 'Con';
  }

  savePost() {
    if (this.postTitle.length === 0 && this.postContent.length === 0) {
      this.errorMessage = 'Empty Posts cannot be created';
      return;
    }
    this.errorMessage = '';
    const newPost = new PostModel(this.postTitle, this.postContent);
    this.postCreated.emit(newPost);
  }

  ngOnInit() {
  }

}
