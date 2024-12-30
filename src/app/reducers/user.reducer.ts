import { Actions, ActionTypes} from "../actions/login/login.actions";
import { User } from "../actions/login/user";
import { state } from "@angular/core";


export interface State {
	authenticated: boolean;
	error?: string;
	loading: boolean;
	loaded: boolean;
	user?:User
}

export const initialeState: State = {
	authenticated: null,
	loaded: false,
	loading:false
}

export function reducer( state: any = initialeState, action:Actions){
	switch(action.type){
		case ActionTypes.AUTHENTICATE:
			return Object.assign({}, state, {error: undefined, loading: true});
		case ActionTypes.AUTHENTICATE_ERROR:
		case ActionTypes.AUTHENTICATED_ERROR:
			return Object.assign({}, state,{authenticated: false, error: action.payload.error.message});
			case ActionTypes.AUTHENTICATED_SUCCESS:
		return Object.assign({}, state, {authenticated: action.payload.authenticated, loaded: true,user:action.payload.user});
		
		case ActionTypes.AUTHENTICATE_SUCCESS:
			const user:User = action.payload.user;
				if (user === null) {
					return state;
				  }

		return Object.assign({}, state, {authenticated: true,error:undefined, loading:false,user:user})		  
		default:
			return state;
	}
}

export const isAuthenticated = (state :State) => state.authenticated;
export const isAuthenticatedLoaded = (state:State) => state.loaded;
export const getUthentificatedUser = (state :State) => state.user;
export const getAuthenticationError = (state: State) => state.error;
export const isLoading = (state:State) => state.loading ;
