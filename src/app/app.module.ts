import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField, MatInputModule } from '@angular/material';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PostEditComponent } from './Posts/post-edit/post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
