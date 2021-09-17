import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FirebaseCreateResponse } from '../interfaces/firebase';
import { Post } from '../interfaces/post';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post<FirebaseCreateResponse>(`${environment.firebaseDbUrl}/posts.json`, post)
      .pipe(map((response: FirebaseCreateResponse) => ({
        ...post,
        id: response.name,
        date: new Date(post.date),
      })));
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.firebaseDbUrl}/posts.json`)
      .pipe(
        map((response: { [key: string]: any }): Post[] => Object.keys(
          response,
        ).map<Post>((key) => ({
          ...response[key],
          id: key,
          date: new Date(response[key].date)
        }))),
      );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.firebaseDbUrl}/posts/${id}.json`);
  }
}
