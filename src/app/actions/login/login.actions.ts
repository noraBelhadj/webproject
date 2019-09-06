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

export interface PayloadAction<T> extends Action {
	 payload: T;
   }

export function toPayload(action: PayloadAction<any>): any {
	return action.payload;
  }
export class AuthenticateAction implements PayloadAction<{email:string, password:string}> {
	readonly type: string = ActionTypes.AUTHENTICATE;
	constructor(public payload:{email:string, password:string}){console.log("authenticate action is called");}
}

export class AuthenticatedAction implements PayloadAction<{token:string}>{

	readonly type: string = ActionTypes.AUTHENTICATED;
	constructor( public payload: {token:string}){}
}

export class AuthenticatedSuccesAction implements PayloadAction<{authenticated:boolean, user:User}>{
	readonly type:string = ActionTypes.AUTHENTICATED_SUCCESS;
	constructor ( public payload:{authenticated:boolean, user:User}){}
}

export class AuthenticatedErrorAction implements PayloadAction<{any:any}> {
	readonly type:string = ActionTypes.AUTHENTICATED_ERROR;
	constructor(public payload:any){}
}

export class AuthenticationErrorAction implements PayloadAction<{any:any}> {
	readonly type:string = ActionTypes.AUTHENTICATE_ERROR;
	constructor(public payload:any){}
}

export class AuthenticationSuccesAction implements PayloadAction<{user:User}> {
	readonly type:string = ActionTypes.AUTHENTICATE_SUCCESS;
	constructor( public payload: {user:User}){ console.log(" AuthenticationSuccesAction is called")}
}

export type Actions = AuthenticateAction | AuthenticationErrorAction 
      | AuthenticationSuccesAction | AuthenticatedAction | AuthenticatedErrorAction
       | AuthenticatedSuccesAction;
