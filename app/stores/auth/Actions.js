import {createActions} from 'reduxsauce';

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state.
 * - to trigger sagas.
 *
 * Actions can be dispatched:
 *
 * - in React component using `dispatch(...)`
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const {Types, Creators} = createActions ({
  // Validate the credentials
  login: ['payload'],
  // Logout the user
  logout: null,
  logoutDestroyData: null,
  // The operation has started and is loading
  loginLoading: null,
  // The login was successfully
  loginSuccess: ['user'],
  // An error occurred
  loginFailure: ['error'],
});

export { Types };
export default Creators;
