import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginValidGuard implements CanActivate {
	constructor(public router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		const tokenValid = localStorage.getItem('token_auth');
		if (tokenValid) {
			this.router.navigate(['admin']);
			return false;
		}
		return true;
	}
}
