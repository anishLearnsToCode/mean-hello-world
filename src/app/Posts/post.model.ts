export class PostModel {
  postID: string;
  postTitle: string;
  postContent: string;

  constructor(postId: string, postTitle: string, postContent: string) {
    this.postID = postId;
    this.postTitle = postTitle;
    this.postContent = postContent;
  }
}
