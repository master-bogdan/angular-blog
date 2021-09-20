import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { AlertService } from '../services/alert.service';

import { EditPageComponent } from './edit-page.component';

class ActivatedRouteStub {
  private subject = new Subject<Params>();

  push(params: Params) {
    this.subject.next(params);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('EditPageComponent', () => {
  let component: EditPageComponent;
  let fixture: ComponentFixture<EditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPageComponent],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        AlertService,
        PostsService,
        HttpClient,
        HttpHandler,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
