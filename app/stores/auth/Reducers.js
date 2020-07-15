/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import {createReducer} from 'reduxsauce';
import INITIAL_STATE from './InitialState';
import {Types} from './Actions';

export const loginLoading = state => ({
  ...state,
  isLoading: true,
  error: null,
});

export const loginSuccess = (state, {user}) => ({
  ...state,
  user,
  isLoading: false,
  error: null,
});

export const loginFailure = (state, {error}) => ({
  ...state,
  user: {},
  isLoading: false,
  error,
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const AuthReducer = createReducer (INITIAL_STATE, {
  [Types.LOGIN_LOADING]: loginLoading,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
});
