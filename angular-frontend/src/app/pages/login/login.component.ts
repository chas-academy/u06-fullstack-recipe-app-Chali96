import { Component } from '@angular/core';
import { Logindetails } from '../../interfaces/logindetails';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginDetails: Logindetails;

  loggedIn$: Observable<boolean>;

  constructor(private auth: AuthService){
    this.loginDetails = {
      email:"chali@gmail.com",
      password:"hejsansvejsan"
    }

    this.loggedIn$ = this.auth.loggedIn$;
  }

  login(){
    this.auth.loginUser(this.loginDetails);
  }
  logout(){
    this.auth.logoutUser();
  }

}
