import { CanActivateFn } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const auth: AuthService = inject(AuthService);

  console.log(auth.getLoginStatus());


  return auth.getLoginStatus();
};
