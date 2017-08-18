import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

export class GlobalEventsManager{
    private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

    constructor(){ }

    showNavBar(ifShow: boolean){
        this._showNavBar.next(ifShow)
    }
}