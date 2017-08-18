import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import{ User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  loading: boolean = true;
  
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;
  error: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.loading = false;
  }

  login() {
    this.loading = true;
    this.authenticationService.customLogin(this.model.email, this.model.password)
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // this.alertService.error(error);
        console.log(error);
        this.error = error.error;
        this.loading = false;
      });
      this.userCreated.emit({user: this.newUser});
      console.log(this.newUser);
      this.newUser = new User();
      this.active = false;
      console.log('data==>', this.active);
      setTimeout(() => this.active = true,0)
  }

}
