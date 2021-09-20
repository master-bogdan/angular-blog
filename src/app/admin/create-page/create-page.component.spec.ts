import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsService } from 'src/app/services/posts.service';
import { AlertService } from '../services/alert.service';

import { CreatePageComponent } from './create-page.component';

describe('CreatePageComponent', () => {
  let component: CreatePageComponent;
  let fixture: ComponentFixture<CreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePageComponent],
      providers: [PostsService, HttpClient, HttpHandler, AlertService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
