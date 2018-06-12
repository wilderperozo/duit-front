import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthValidGuard implements CanActivate {
	constructor(public router: Router) {}

	canActivate(): Observable<boolean> | Promise<boolean> | boolean {
		const tokenValid = localStorage.getItem('token_auth');
		if (tokenValid == null || tokenValid === undefined) {
			this.router.navigate(['auth']);
			return false;
		}
		return true;
	}
}
