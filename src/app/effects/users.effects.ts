import { Injectable } from "@angular/core";

// import @ngrx
import { Effect, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";

// import rxjs
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

// import services
import { UserService } from "../services/user.service";

// import actions
import {
  toPayload,
  ActionTypes,
  AuthenticatedErrorAction,
  AuthenticatedSuccesAction,
  AuthenticationErrorAction,
  AuthenticateAction,
  AuthenticationSuccesAction,
  AuthenticatedAction
} from "../actions/login/login.actions";



@Injectable()
export class UserEffects {
  constructor(private actions: Actions,
    private userService: UserService) {
}
  /**
   * Authenticate user.
   * @method authenticate
   */
  @Effect()
  public authenticate: Observable<Action> = this.actions
    .ofType(ActionTypes.AUTHENTICATE)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(payload => {
      console.log("using authenticate effects");
      return this.userService.authenticate(payload.email, payload.password)
        .map(user => new AuthenticationSuccesAction({user: user}))
        .catch(error => Observable.of(new AuthenticationErrorAction({error: error})));
    });

  @Effect()
  public authenticated: Observable<Action> = this.actions
    .ofType(ActionTypes.AUTHENTICATED)
    .switchMap(payload => {
      console.log("using authenticated effects ......");
      return this.userService.authenticatedUser()
        .map(user => new AuthenticatedSuccesAction({authenticated: (user !== null), user: user}))
        .catch(error => Observable.of(new AuthenticatedErrorAction({error: error})));
    });


}
