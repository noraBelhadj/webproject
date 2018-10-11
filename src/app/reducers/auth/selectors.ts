import { AppState } from '../../interfaces';
import { createSelector } from 'reselect';
import { AuthState } from './auth.state';


function getAuthState(state: AppState) : AuthState {
    return state.auth;
}

const fetchAuthStatus = function(stateAuth: AuthState): Boolean {
    return stateAuth.isAuthenticated;
}

export const getAuthStatus = createSelector(getAuthState, fetchAuthStatus);
