import { Action } from "@ngrx/store";
import { User } from "./user";

export const ActionTypes = {
  AUTHENTICATE: "[users] Authentication",
  AUTHENTICATE_ERROR: "[users] Authentication error",
  AUTHENTICATE_SUCCESS: "[users] Authentication success",
  AUTHENTICATED: "[users] Authenticated",
  AUTHENTICATED_ERROR:"[users] Authenticated error",
  AUTHENTICATED_SUCCESS: "[users] Authenticated success",
}

export class AuthenticateAction implements Action {
	readonly type: string = ActionTypes.AUTHENTICATE;
	constructor(public payload:{email:string, password:string}){}
}

export class AuthenticatedAction implements Action{

	readonly type: string = ActionTypes.AUTHENTICATED;
	constructor( public payload: {token:string}){}
}

export class AuthenticatedSuccesAction implements Action{
	readonly type:string = ActionTypes.AUTHENTICATED_SUCCESS;
	constructor ( public payload:{authenticated:boolean, user:User}){}
}

export class AuthenticatedErrorAction implements Action {
	readonly type:string = ActionTypes.AUTHENTICATED_ERROR;
	constructor(public payload:any){}
}

export class AuthenticationErrorAction implements Action {
	readonly type:string = ActionTypes.AUTHENTICATE_ERROR;
	constructor(public payload:any){}
}

export class AuthenticationSuccesAction implements Action {
	readonly type:string = ActionTypes.AUTHENTICATE_SUCCESS;
	constructor( public payload: {user:User}){}
}

export type Actions = AuthenticateAction | AuthenticationErrorAction 
      | AuthenticationSuccesAction | AuthenticatedAction | AuthenticatedErrorAction
       | AuthenticatedSuccesAction;
