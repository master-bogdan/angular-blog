import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = `
  https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}
`;

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return '';
  }

  login(user: User): Observable<any> {
    return this.http.post('', user);
  }

  logout(): void {

  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken() {

  }
}
