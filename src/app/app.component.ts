import {Component, EventEmitter, Output} from '@angular/core';
import {PostModel} from './Posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts: PostModel[] = [];
  @Output() newPostCreatedInPostEdit = new EventEmitter();

  constructor() { }

  onNewPostCreated(post: PostModel) {
    this.posts.push(post);
  }

  newPostCreated(post: PostModel) {
    this.newPostCreatedInPostEdit.emit(post);
  }
}
