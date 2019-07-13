import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	public url = '';

	constructor(private http: Http, private router: Router) {
		this.defineUrl();
	}

	public login(data) {
		const url = window.location.host;
		return this.post(this.url + `/auth`, data).map(response => {
			return response.json();
		});
	}

	public getDataByUrl() {
		const url = window.location.host;
		return this.get(this.url + `/auth/url-business/${url}`).map(response => {
			return response.json();
		});
	}
	/**
	 * Usa el metodo get desde el auth service, esto es para permitir el uso de tokens y validaciones en cada peticion
	 * @param url Get
	 */
	public get(url) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token_auth'));
		return this.http.get(url, { headers: headers });
	}

	public post(url, data) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token_auth'));
		return this.http.post(url, data, { headers: headers });
	}

	public put(url, data) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('token_auth'));
		return this.http.put(url, data, { headers: headers });
	}

	public patch(url, data) {
		const headers = new Headers();
		headers.append('Authorization', localStorage.getItem('token_auth'));
		return this.http.patch(url, data, { headers: headers });
	}

	public delete(url) {
		const headers = new Headers();
		headers.append('Authorization', localStorage.getItem('token_auth'));
		return this.http.delete(url, { headers: headers });
	}

	private defineUrl() {
		if (window.location.host === 'localhost:4200') {
			this.url = 'https://pacific-island-58092.herokuapp.com';
		} else {
			this.url = 'http://prod';
		}
	}
}
