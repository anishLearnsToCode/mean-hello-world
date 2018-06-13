import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostEditComponent } from './Posts/post-edit/post-edit.component';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './Posts/posts-list/posts-list.component';
import { PostComponent } from './Posts/post/post.component';
import {PostsService} from './Posts/Posts.service';
import { PostCreateComponent } from './Posts/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PostEditComponent,
    HeaderComponent,
    PostsListComponent,
    PostComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
