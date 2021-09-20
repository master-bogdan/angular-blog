import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postSub: Subscription;
  deleteSub: Subscription;
  searchStr = '';

  constructor(
    private postsService: PostsService,
    private alert: AlertService,
  ) { }

  ngOnInit(): void {
    this.postSub = this.postsService.getAll().subscribe((posts) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    if (this.postSub) {
      this.postSub.unsubscribe();
    }

    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }

  remove(id: string): void {
    this.deleteSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
      this.alert.danger('Post have been deleted');
    });
  }
}
