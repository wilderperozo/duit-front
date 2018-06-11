import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(private authService: AuthService) {
		this.getDataEstablishment();
	}

	private getDataEstablishment() {
		this.authService.getDataByUrl().subscribe(data => {
			localStorage.setItem('businessData', JSON.stringify(data));
		});
	}
}
