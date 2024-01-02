import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 title='Veuillez vous identifier! '
 message: string = 'Vous êtes déconnecté.tasssere30@gmail.com/qwerty ';
 email: string = '';
 password: string = '';

 
 constructor(
  private authService: AuthService, 
  private router: Router
) { }

ngOnInit() {
 
}

setMessage() {
  if(this.authService.isLoggedIn) {
    this.message = 'Vous êtes connecté.';
  } else {
    this.message = 'Indentifiant ou mot de passe incorrect.'
  }
}

login() {
  this.message = 'Tentative de connexion en cours...';
  this.authService.login(this.email, this.password).subscribe((isLoggedIn: boolean) => {
    this.setMessage();
    if (isLoggedIn) {
      this.router.navigate(['/pokemon']);
    } else {
      console.log('Connexion échouée');
      this.password = '';
      this.router.navigate(['/login']);
    }
  });
}


logout() {
  this.authService.logout();
  this.message = 'Vous êtes déconnecté.';
  this.router.navigate(['/login']);
}

}
