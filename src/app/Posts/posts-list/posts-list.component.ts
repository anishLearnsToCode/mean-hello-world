import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { PostModel } from '../post.model';
import {PostComponent} from '../post/post.component';
import {PostsService} from '../Posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  private postsSubscription: Subscription;

  @Input() posts: PostModel[] = [
    new PostModel(null, 'Title Heading', 'this is the sample text'),
    new PostModel(null, 'Heading 2', 'This content is amazing')
  ];

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSubscription = this.postsService.getPostUpdateListener().subscribe(
      (posts: PostModel[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
