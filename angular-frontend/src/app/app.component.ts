import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LoggedInUser } from './interfaces/loggedinuser';
import { AuthService } from './services/auth.service';
import { Logindetails } from './interfaces/logindetails';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule, RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipe App';

  loggedIn$: Observable<LoggedInUser>;


  constructor(private auth: AuthService) {
    this.loggedIn$ = this.auth.loggedIn$;
  }

  logoutUser(){
    this.auth.logoutUser();
  }
}