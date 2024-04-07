import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Logindetails } from '../interfaces/logindetails';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { User } from '../interfaces/user';
import { LoggedInUser } from '../interfaces/loggedinuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<LoggedInUser>({
    user: undefined,
    loginState: false,
  });

  loggedIn$ = this.loggedIn.asObservable();

  private baseUrl = 'https://u06-recipe-app-chali96.onrender.com/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

   updateLoginState(loginState: LoggedInUser) {
    this.loggedIn.next(loginState);
   }
    getLoginStatus() {
    return this.loggedIn.value.loginState;
   }

   loginUser(loginDetails: Logindetails) {
    this.http
      .post<any>(this.baseUrl + 'login', loginDetails, this.httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(result => {
        console.log(result);
        this.updateLoginState({
          user: result.user,
          loginState: true,
        });
        this.httpOptions.headers = this.httpOptions.headers.set(
          'Authorization', 
          'Bearer'  + result.token
          );
      });

   }

   logoutUser() {
    this.http.post<any>(this.baseUrl+'logout', {}, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(result => {
        console.log(result);
        this.updateLoginState({
          user: {
            id: 0,
            name: '',
            email: '',
            created_at: '',
          },
          loginState: false,
        });
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer");
      });
  }

   getCurrentUser(){
    let user: User;
    user = {
      id: 0,
      name: '',
      email: '',
      created_at: '',
    };
    this.http
      .get<User[]>(
        this.baseUrl + 'getUser/' + this.loggedIn.value.user?.id,
        this.httpOptions
      )
      .subscribe((res) => (user = res[0]));
    return user;
  }

  //  getUser2(): Observable<User[]> {
  //   return this.http.get<User[]>(this.baseUrl+'getuser/2', this.httpOptions);
  //  }

   private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      () => new Error('Something bad happened; please try again later!')
      );
   }
}
