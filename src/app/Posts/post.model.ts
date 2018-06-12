export class PostModel {
  postTitle: string;
  postContent: string;

  constructor(postTitle: string, postContent: string) {
    this.postTitle = postTitle;
    this.postContent = postContent;
  }
}
