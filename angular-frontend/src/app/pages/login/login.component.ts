import { Component } from '@angular/core';
import { Logindetails } from '../../interfaces/logindetails';
import { AuthService } from '../../services/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginDetails: Logindetails;

  constructor(private auth: AuthService){
    this.loginDetails = {
      email:"chals@gmail.com",
      password:"hejsansvejsan"
    }
  }

  login(){
    this.auth.loginUser(this.loginDetails);
  }
  logout(){
    this.auth.logoutUser();
  }

}
