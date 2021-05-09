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
          this.saveForgotMessage(forgotRes.message)
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
          this.saveChangeMessage(changeRes.message)
          return {
            ...changeRes,
            message: changeRes.message,
          };
        })
      );
  }

  private saveForgotMessage(forgotMessage: string) {
    localStorage.setItem('forgotpassword', forgotMessage);
  }

  private saveChangeMessage(changeMessage: string) {
    localStorage.setItem('changepassword', changeMessage);
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
}
