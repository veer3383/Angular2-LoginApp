import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { GlobalEventsManager } from '../global-event-manager';

@Injectable()
export class StorageService{
    constructor(
        private globalEventsManager: GlobalEventsManager
    ){}
    setCurrentUser(user: any): void{
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.globalEventsManager.showNavBar(true);
    }

    getCurrentUser(): User{
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    removeCurrentUser(): void {
        localStorage.removeItem('currentUser');
        this.globalEventsManager.showNavBar(false);
    }
}