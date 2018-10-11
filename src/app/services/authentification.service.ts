import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { HttpService } from './http';
import { AppState } from '../interfaces';
//import { Store } from '@ngrx/store';
import { AuthActions } from '../actions/auth/auth.action';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {
    constructor(
    
    private Http: HttpService,
    private actions : AuthActions,
   // private store : Store<AppState>
  	) { }

login(data) : Observable<any> {
    return this.Http.post('/test/url/', {user: data}, null)
    .map((res : Response) => {
     data = res.json();
     if (!data.error) {
         this.setTokenInLocalStorage(data);
     //    this.store.dispatch(this.actions.loginSuccess());
     } else {
        this.Http.loading.next({ loading: false, hasError: true, hasMsg:'erreur'});
     }
     }

     )

} 
private setTokenInLocalStorage(user_data: any) : void {

    const jsonDta = JSON.stringify(user_data);
    localStorage.setItem('user', jsonDta);
}

}
