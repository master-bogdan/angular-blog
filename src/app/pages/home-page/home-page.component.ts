import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private postService: PostsService,
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
  }
}
