import { compose } from '@ngrx/core/';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from './../environments/environment';

import { AppState } from './interfaces';
import { authReducer } from './reducers/auth/auth.reducer';



const reducers = {
    auh: authReducer
}

//export const developementReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);

//const productionReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers); 

export function reducer(state: any, action: any) {
    return null;
 /* if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developementReducer(state, action);
  }*/
}

