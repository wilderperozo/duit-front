import { Injectable } from '@angular/core';

@Injectable()
export class BusinessService {
	public businessData = JSON.parse(localStorage.getItem('businessData'));

	constructor() {}
}
