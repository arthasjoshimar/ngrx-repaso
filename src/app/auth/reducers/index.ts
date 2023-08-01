import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User | undefined;
}

// export const reducers: ActionReducerMap<AuthState> = {
// };

// export const metaReducers: MetaReducer<AuthState>[] = isDevMode() ? [] : [];

export const initialAuthReducer: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthReducer,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  })
);