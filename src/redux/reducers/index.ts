import { combineReducers } from '@reduxjs/toolkit';
import { localizeReducer, LocalizeState } from 'react-localize-redux';
import { routerReducer, RouterState } from 'react-router-redux';

import { authReducer, IAuthState } from './auth.reducer';

export interface IApplicationState {
  auth: IAuthState;
  routing: RouterState;
  localize: LocalizeState;
}

export const reducer = combineReducers({
  auth: authReducer,
  routing: routerReducer,
  localize: localizeReducer
});
