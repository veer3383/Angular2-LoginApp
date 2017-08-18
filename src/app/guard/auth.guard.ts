import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(
        private router: Router,
        private storageService: StorageService
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ){
        if(this.storageService.getCurrentUser())
        {
            return true;
        }

        this.router.navigate(['/login'],{
            queryParams: {
                returnUrl: state.url
            }
        });
        return false;
    }
}