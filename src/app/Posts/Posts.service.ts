import {PostModel} from './post.model';
import {Injectable} from '@angular/core';
import { Subject} from 'rxjs';

@Injectable()
export class PostsService {
  private posts: PostModel[] = [];
  private postsUpdated = new Subject<PostModel[]>();

  getPosts() {
    return this.posts;
  }

  addPost(post: PostModel) {
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
