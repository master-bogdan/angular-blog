import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  post: Post;
  submited = false;
  updateSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private alert: AlertService,
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.postService.getById(params.id)),
      ).subscribe((post: Post) => {
        this.post = post;
        this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          text: new FormControl(post.text, Validators.required),
        });
      });
  }

  ngOnDestroy(): void {
    if (this.updateSub) {
      this.updateSub.unsubscribe();
    }
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submited = true;

    this.updateSub = this.postService.update({
      ...this.post,
      text: this.form.value.text as string,
      title: this.form.value.title as string,
    }).subscribe(() => {
      this.submited = false;
      this.alert.success('Post have been updated');
    });
  }
}
