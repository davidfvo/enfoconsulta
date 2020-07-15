/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import {createReducer} from 'reduxsauce';
import INITIAL_STATE from './InitialState';
import {Types} from './Actions';

export const exampleLoading = state => ({
  ...state,
  getLoading: true,
  getError: null,
});

export const exampleSucess = (state, {getData}) => ({
  ...state,
  getData,
  getLoading: false,
  getError: null,
});

export const exampleFailure = (state, {getError}) => ({
  ...state,
  getData: INITIAL_STATE.getData,
  getLoading: false,
  getError,
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const ExampleReducer = createReducer (INITIAL_STATE, {
  [Types.EXAMPLE_LOADING]: exampleLoading,
  [Types.EXAMPLE_SUCCESS]: exampleSucess,
  [Types.EXAMPLE_FAILURE]: exampleFailure,
});
