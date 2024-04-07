import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Loggedinuser } from './interfaces/loggedinuser';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule, RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipe App';

  loggedIn$: Observable<Loggedinuser>;

  constructor(private auth: AuthService) {
    this.loggedIn$ = this.auth.loggedIn$;
  }
}