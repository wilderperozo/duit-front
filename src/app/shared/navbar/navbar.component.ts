import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	constructor(private router: Router) {}

	public logOut() {
		localStorage.clear();
		this.router.navigate(['/auth']);
		setTimeout(() => {
			window.location.reload();
		}, 500);
	}
}
