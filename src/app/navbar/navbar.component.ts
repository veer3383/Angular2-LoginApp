import { Component } from '@angular/core';
import { GlobalEventsManager } from '../global-event-manager';
import { StorageService } from '../services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  showNavBar: boolean = false;
  currentUser: any = {};

  constructor(
    private globalEventsManager: GlobalEventsManager, 
    private storageService: StorageService, private router: Router) {
      this.currentUser = this.storageService.getCurrentUser();
      if (this.currentUser) {
        this.showNavBar = true;
      }
      this.globalEventsManager.showNavBarEmitter.subscribe((nav) => {
        if (nav || this.currentUser) {
          this.showNavBar  = true;
          if (!this.currentUser) {
            this.currentUser = this.storageService.getCurrentUser();
          }
        } else {
          this.showNavBar = false;
        }
      });
    }
    logout() {
      this.storageService.removeCurrentUser();
      this.showNavBar = false;
      this.router.navigate(['login']);
    }
  }
