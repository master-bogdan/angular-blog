import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, OperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators/';
import { environment } from 'src/environments/environment';
// Interfaces
import { User } from 'src/app/interfaces/user';
import { FirebaseAuthResponse } from 'src/app/interfaces/firebase';

const URL = `
  https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}
`;

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string | null {
    const expiresDate = new Date(localStorage.getItem('fb-token-exp')!);

    if (new Date() > expiresDate) {
      this.logout();
      return null;
    }

    return localStorage.getItem('fb-token')!;
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;

    return this.http.post(URL, user)
      .pipe(
        tap<any>(this.setToken),
      );
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: FirebaseAuthResponse | null) {
    if (response) {
      const expiresDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expiresDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
