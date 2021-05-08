import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { ForgotPassword } from './forgot-password/forgotPassword.model';
import { ChangePassword } from './change-password/changePassword.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signin(username: string, password: string) {
    const userAgent = window.navigator.userAgent;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('User-Agent', userAgent);

    return this.http
      .post<User>(
        'http://localhost:8081/user/signin',
        {
          username: username,
          password: password,
        },
        { headers }
      )
      .pipe(
        map((loginRes) => {
          console.log(
            '🚀 ~ file: auth.service.ts ~ line 38 ~ AuthService ~ map ~ loginRes',
            loginRes
          );
          this.saveToken(loginRes.token);
          this.saveDispUsername(loginRes.displayusername);
          return {
            ...loginRes,
            displayusername: loginRes.displayusername,
          };
        })
      );
  }

  forgotPassword(username: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post<ForgotPassword>(
        'http://localhost:8081/user/forgotpassword',
        { email: username },
        {
          headers,
        }
      )
      .pipe(
        map((forgotRes) => {
          return {
            ...forgotRes,
            message: forgotRes.message,
          };
        })
      );
  }

  changePassword(
    username: string,
    currentpassword: string,
    newpassword: string
  ) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post<ChangePassword>(
        'http://localhost:8081/user/changepassword',
        {
          email: username,
          currentpassword: currentpassword,
          newpassword: newpassword,
        },
        {
          headers,
        }
      )
      .pipe(
        map((changeRes) => {
          return {
            ...changeRes,
            message: changeRes.message,
          };
        })
      );
  }

  private saveDispUsername(dispUsername: string) {
    localStorage.setItem('displayusername', dispUsername);
  }

  private saveToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  // autoLogin() {
  //   const userData: {
  //     email: string;
  //     id: string;
  //     _token: string;
  //     _tokenExpirationDate: string;
  //   } = JSON.parse(localStorage.getItem('userData'));
  //   if (!userData) {
  //     return;
  //   }

  //   const loadedUser = new User(
  //     userData.email,
  //     userData.id,
  //     userData._token,
  //     new Date(userData._tokenExpirationDate)
  //   );

  //   if (loadedUser.token) {
  //     this.user.next(loadedUser);
  //     const expirationDuration =
  //       new Date(userData._tokenExpirationDate).getTime() -
  //       new Date().getTime();
  //     this.autoLogout(expirationDuration);
  //   }
  // }

  // logout() {
  //   this.user.next(null);
  //   this.router.navigate(['/auth']);
  //   localStorage.removeItem('userData');
  //   if (this.tokenExpirationTimer) {
  //     clearTimeout(this.tokenExpirationTimer);
  //   }
  //   this.tokenExpirationTimer = null;
  // }

  // autoLogout(expirationDuration: number) {
  //   this.tokenExpirationTimer = setTimeout(() => {
  //     this.logout();
  //   }, expirationDuration);
  // }

  // private handleAuthentication(
  //   email: string,
  //   userId: string,
  //   token: string,
  //   expiresIn: number
  // ) {
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   const user = new User(email, userId, token, expirationDate);
  //   this.user.next(user);
  //   this.autoLogout(expiresIn * 1000);
  //   localStorage.setItem('userData', JSON.stringify(user));
  // }

  // private handleError(errorRes: HttpErrorResponse) {
  //   let errorMessage = 'An unknown error occurred!';
  //   if (!errorRes.error || !errorRes.error.error) {
  //     return throwError(errorMessage);
  //   }
  //   switch (errorRes.error.error.message) {
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'This email exists already';
  //       break;
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'This email does not exist.';
  //       break;
  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'This password is not correct.';
  //       break;
  //   }
  //   return throwError(errorMessage);
  // }
}
