import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { User } from './../models/User.model';
import { Business } from '../models/Business.model';

class Error {
	email = { is: false, msg: '' };
	password = { is: false, msg: '' };
}

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
	loginForm = new User();
	public businessData = new Business();
	errors = new Error();
	done = false;

	constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {}

	// On submit button click
	onSubmit() {
		if (!this.done) {
			this.loginForm.business = this.businessData._id;
			this.authService.login(this.loginForm).subscribe(
				resp => {
					this.done = true;
					localStorage.setItem('token_auth', resp.token.token);
					setTimeout(() => {
						this.router.navigate(['/admin']);
					}, 1000);
				},
				error => {
					this.errors.password = { is: true, msg: error.json().msg };
				}
			);
		}
	}
	getData() {
		this.businessData = JSON.parse(localStorage.getItem('businessData'));
		console.log('this.businessData ', this.businessData);
	}

	ngOnInit() {
		this.authService.getDataByUrl().subscribe(resp => {
			this.getData();
		});
	}
}
