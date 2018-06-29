import { Component, OnInit } from "@angular/core";
import { UserPostsService, IPost } from "./user-posts.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-posts",
  templateUrl: "./user-posts.component.html",
  styleUrls: ["./user-posts.component.css"]
})
export class UserPostsComponent implements OnInit {
  user_posts: IPost[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userpostservice: UserPostsService
  ) { }
  ngOnInit() {
    this.userpostservice.listUserPosts().then(posts => {this.user_posts = posts; });
  }
  deletePost(postid: string) {
  this.userpostservice.deletepost(postid).then(() => {this.updateList(); });
  }

  updateList() {
    this.userpostservice.listUserPosts().then(posts => {this.user_posts = posts; });
  }

}


