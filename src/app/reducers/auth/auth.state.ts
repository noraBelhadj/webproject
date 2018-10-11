import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
	isAuthenticated : Boolean;
}

export const AuthStateRecord = Record({
    isAuthenticated :true
});