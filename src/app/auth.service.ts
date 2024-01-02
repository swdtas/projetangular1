import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn?: boolean;
  redirectUrl: string='';
  constructor(private router: Router) {}
  login(email: string, password: string): Observable<boolean> {
    const isLoggedIn = email === 'tassere30@gmail.com' && password === 'qwerty';
    return of(isLoggedIn).pipe(
      delay(1000),
      tap((loggedIn) => (this.isLoggedIn = loggedIn))
    );
  }
  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
