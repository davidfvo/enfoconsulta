import { put, call } from 'redux-saga/effects';
import NavigationService from '../services/NavigationService';
import AuthActions from '../stores/auth/Actions';
import deviceStorage from '../stores/DeviceStorage';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export default function* startup() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html

  // Verify is the user is logged
  let user = yield call(deviceStorage.getItem, 'user');

  try {
    user = JSON.parse(user); // Convert to object
    if (user && user.code) {
      yield put(AuthActions.loginSuccess(user));
      if(pin){
        yield put(AuthActions.setCode(pin))
      }
      //NavigationService.navigateAndReset('Pin');
      return;
    }
  } catch (e) {
    console.log('Error getting the logged user');
    console.log(e);
  }

  //NavigationService.navigateAndReset('Login');
}
