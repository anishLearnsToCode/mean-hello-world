import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule } from '@angular/material';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PostEditComponent } from './Posts/post-edit/post-edit.component';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './Posts/posts-list/posts-list.component';
import {MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostEditComponent,
    HeaderComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
