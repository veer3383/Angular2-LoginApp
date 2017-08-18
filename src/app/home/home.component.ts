import {Component} from '@angular/core';
import {User} from '../models/user';

@Component({
    selector: 'my-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent{
    message: string ='hello!';
    users =[
        {id:25, name: 'Chris', username:'khan'},
        {id:26, name: 'Chris', username:'jeriko'},
        {id:27, name: 'Chris', username:'beniot'}
    ];
    activeUser;
    selectUser(user){
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event){
        this.users.push(event.user);
    }
} 

