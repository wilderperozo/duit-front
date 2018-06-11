import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BusinessService } from './business.service';

@Injectable()
export class ProfileService {
	public url = '';

	constructor(private authService: AuthService, private businessService: BusinessService) {
		this.url = authService.url + '/api/profiles';
	}

	public getAll() {
		const businessId = this.businessService.businessData._id;
		this.authService.get(this.url + `/${businessId}/by-business`);
	}
}
