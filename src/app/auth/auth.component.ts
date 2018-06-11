import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { User } from './../models/User.model';

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
	public businessData = [];
	errors = new Error();
	done = false;

	constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {}

	// On submit button click
	onSubmit() {
		this.authService.login(this.loginForm).subscribe(
			resp => {
				this.done = true;
				setTimeout(() => {
					this.router.navigate(['/admin'])
				}, 1000);
			},
			error => {
				this.errors.password = { is: true, msg: error.json().msg };
			}
		);
	}
	getData() {
		this.businessData = JSON.parse(localStorage.getItem('businessData'));
	}

	ngOnInit() {
		this.authService.getDataByUrl().subscribe(resp => {
			this.getData();
		});
	}
}
