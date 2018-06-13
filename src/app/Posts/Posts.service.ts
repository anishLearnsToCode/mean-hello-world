import {PostModel} from './post.model';
import {Injectable} from '@angular/core';
import { Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
  private posts: PostModel[] = [];
  private postsUpdated = new Subject<PostModel[]>();

  constructor(private HttpClientServer: HttpClient) {}

  getPosts() {
    this.HttpClientServer.get<{message: string, posts: PostModel[]}>('http://localhost:4000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  addPost(post: PostModel) {
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
