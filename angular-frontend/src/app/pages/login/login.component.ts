import { Component } from '@angular/core';
import { Logindetails } from '../../interfaces/logindetails';
import { AuthService } from '../../services/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginDetails: Logindetails;

  constructor(private auth: AuthService){
    this.loginDetails = {
      email: "",
      password: ""
    }
  }

  login(){
    this.auth.loginUser(this.loginDetails);
  }
  logout(){
    this.auth.logoutUser();
  }

}
