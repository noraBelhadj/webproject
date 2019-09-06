
import { Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";
import  "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { User } from "../actions/login/user";
import { Mock } from "protractor/built/driverProviders";



export const MOCK_USER = new User();

MOCK_USER._id = "1";
MOCK_USER.email="nora@live.fr";
MOCK_USER.password="test";



@Injectable()
export class UserService {
    private _authenticated = false;
    public authenticate(email:string, password:string):Observable<User>{
        if(email== MOCK_USER.email && password == MOCK_USER.password){
          this._authenticated = true;
          console.log("user ok ");
          return Observable.of(MOCK_USER);
        }

        return Observable.throw(new Error(" Invalid email or password"));
        
    }

    public authentificated(): Observable<boolean> {
        return Observable.of( this._authenticated)
    }

    public authenticatedUser():Observable<User> {
        return Observable.of(MOCK_USER);
    }

}
