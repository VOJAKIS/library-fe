import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
	constructor(private auth: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const exclude = 'api/token';

		if (req.url.search(exclude) === -1) {
			const token = this.auth.getToken();
			if (token !== null) {
				req = req.clone({ headers: req.headers.append('Authorization', token) });
			}
		}

		return next.handle(req);
	}
}
