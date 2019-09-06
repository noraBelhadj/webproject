//import { compose } from '@ngrx/core/';
import { compose, State } from '@ngrx/store';
import { combineReducers, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from "ngrx-store-freeze";
import { createSelector } from "reselect";
import { routerReducer} from "@ngrx/router-store";
import { environment } from './../environments/environment';
import { AppState } from './interfaces';
import { authReducer } from './reducers/auth/auth.reducer';
import * as usersState from './reducers/user.reducer';


export interface StateApp {
  users: usersState.State;
}

export const reducers : ActionReducerMap<StateApp>= {
  users: usersState.reducer
}

export function logger(reducer:ActionReducer<StateApp>) : ActionReducer<any,any> {
return function(state: StateApp, action:any) : StateApp {
  console.log('state',state);
  console.log('action', action);
return reducer(state, action);
}
}


export const metaReducers : MetaReducer<StateApp>[] = !environment.production? [logger] : [];
/*
const productionReducer: ActionReducer<StateApp> = combineReducers(reducers);

const developmentReducer: ActionReducer<StateApp> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    console.log("productionReducer is running");
    return productionReducer(state, action);
  } else {
    console.log("developementReducer is running");
    return developmentReducer(state, action);
  }
}
*/


export const getUsersState = (stateApp: StateApp) => stateApp.users;

/**
 * Returns the authenticated user
 * @function getAuthenticatedUser
 * @param {State} state
 * @param {any} props
 * @return {User}
 */
export const getAuthenticatedUser = createSelector(getUsersState, usersState.getUthentificatedUser);


export const getAuthenticationError = createSelector(getUsersState, usersState.getAuthenticationError);

/**
 * Returns true if the user is authenticated
 * @function isAuthenticated
 * @param {State} state
 * @param {any} props
 * @return {boolean}
 */
export const isAuthenticated = createSelector(getUsersState, usersState.isAuthenticated);

export const isAuthenticatedLoaded = createSelector(getUsersState, usersState.isAuthenticatedLoaded);

export const isAuthenticationLoading = createSelector(getUsersState, usersState.isLoading);


