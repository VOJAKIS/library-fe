import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
	
	constructor(private authService: AuthService, private router: Router) {}
	
	form = new FormGroup({
		username: new FormControl(undefined, Validators.required),
		password: new FormControl(undefined, Validators.required)
	});
	
	login(): void {
		if (this.form.valid) {
			if (this.form.controls.username.value && this.form.controls.password.value) {
				const auth: Auth = {
					username: this.form.controls.username.value,
					password: this.form.controls.password.value
				};
				this.authService.login(auth).subscribe(() => { this.router.navigate(['/']); });
			}
		}
	}
}
