import { PostModel } from './post.model';
import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {
  private posts: PostModel[] = [];
  private postsUpdated = new Subject<PostModel[]>();
  private serverAddress = 'http://localhost:4000/api/';

  constructor(private HttpClientServer: HttpClient) {}

  getPosts() {
    this.HttpClientServer.get<{message: string, posts: PostModel[]}>(this.serverAddress + 'posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  addPost(post: PostModel) {
    this.HttpClientServer.post<{message: string}>(this.serverAddress + 'posts', post)
      .subscribe((responseData) => {
        console.log(responseData);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
