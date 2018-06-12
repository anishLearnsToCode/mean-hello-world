import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  constructor() { }

  editPost() {
    alert('Post has been edited');
  }

  ngOnInit() {
  }

}
