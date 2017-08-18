import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/map';

import { GlobalEventsManager } from '../global-event-manager';
import { StorageService } from './storage.service';

@Injectable()
export class AuthenticationService {

    constructor(
        private http: Http,
        private globalEventsManager: GlobalEventsManager,
        private storageService: StorageService) { }

    customLogin(email: string, password: string) {
        let user: any = {};

        if (email === 'admin' && password === 'password') {
            user.name = 'admin';
            user.token = 'asdff-dasdd-djlkn-cscsa';
            user.email = email;
            this.storageService.setCurrentUser(user);
        } else {
            alert("Invalid credentials!");
            return Observable.throw({ error: 'Invalid credentials!', statusCode: 404 });
        }

        return Observable.of(user);
    }
}
