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
        console.log(postData);
        this.posts = postData.posts;
        console.log(this.posts);
        this.postsUpdated.next([...this.posts]);
      });
  }

  addPost(post: PostModel) {
    this.HttpClientServer.post<{message: string, postID: string}>(this.serverAddress + 'posts', post)
      .subscribe((responseData) => {
        console.log(responseData);
        this.posts.push(new PostModel(responseData.postID, post.postTitle, post.postContent));
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(postID: string) {
    console.log('Sending request to express app to delete post with PostID: ' + postID);
    this.HttpClientServer.delete<{deleted: boolean}>(this.serverAddress + 'posts/' + postID)
      .subscribe((responseData) => {
        console.log(responseData.deleted);
        if (responseData.deleted) {
        }
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
