import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registerdetails } from '../../interfaces/registerdetails';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 registerdetails: Registerdetails;

 constructor (private auth: AuthService){
  this.registerdetails = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }
 }

 register() {
  this.auth.registerUser(this.registerdetails)

  // console.log(this.registerdetails)
 }
}
