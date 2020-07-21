import { put, call, all } from 'redux-saga/effects';
import AuthActions from '../stores/auth/Actions';
import NavigationService from '../services/NavigationService';
import deviceStorage from '../stores/DeviceStorage';
import ResponseCode from '../services/ResponseCode';
import QB from 'quickblox-react-native-sdk'
import {
  logoutSuccess,
  logoutFail,
  loginSuccess,
  usersUpdateSuccess,
  usersCreateSuccess,
} from '../stores/quick-blox/actions'
import { isEqualString } from '../utils/StringUtil';

export function* login(request) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(AuthActions.loginLoading());
  if (!request.payload || !request.payload.username || !request.payload.password) {
    yield put(
      AuthActions.loginFailure({
        code: ResponseCode.BAD_REQUEST.code,
        message: 'El usuario y la contraseña son requeridos. Favor intentar de nuevo.',
      }),
    );
    return;
  }

  //QuickBlox LogIn && user creation
  const QBLogIn =  yield call(QBAuth, request.payload)

  if (QBLogIn.message != 'OK'){
    const _QBLogIn = yield call(QBAuth, request.payload)
  }
  //

  const result = {
    username: request.payload.username,
  }

  // Save the user in the storage
  yield call(deviceStorage.saveItem, 'user', JSON.stringify(result));
  yield put(AuthActions.loginSuccess(result));
}

export function* QBAuth(request){
  try {
    //QB Auth
    const login = request.username
    const password = request.password
    const { session, user } = yield call(QB.auth.login, { login, password })
    const result = loginSuccess({ session, user: { ...user, password } })
    yield put(result)

    //UpdateUser on mismatch
    const userFullName = request.username.toUpperCase()
    if(user.fullName !== (userFullName)){
      const userData = {
        fullName: userFullName,
        login: user.login,
      }
      const updateUser = yield call(QB.users.update, userData)
      const result = usersUpdateSuccess(updateUser)
      yield put(result)
    }
    return {
      code: '0',
      message: 'OK',
    }
  } catch (e) {
    try {
      if(isEqualString(e.message,"Unauthorized") || isEqualString(e.message,"Request failed: unauthorized (401)")){
        //UserCreation
        const userCreation = {
          fullName: request.username.toUpperCase(),
          login: request.username,
          password: request.password,
        }
        const user = yield call(QB.users.create, userCreation)
        const result = usersCreateSuccess(user)
        yield put(result)
        return {
          code: '1',
          message: 'user created',
        }
      }
    } catch (error) {console.log(error)}
    return {
      code: 'ERROR',
      message: e.message
    }
  }
}

export function* QBlogout() {
  //Logout from QuickBlocks
  try {
    yield call(QB.auth.logout)
    yield put(logoutSuccess())
  } catch (e) {
    yield put(logoutFail(e.message))
  }
}

export function* logout() {
  //Logout from QuickBlocks
  const QBLogOut = yield call(QBlogout, {})

  // Clear session
  NavigationService.navigateAndReset('Login');
  yield call(deviceStorage.clear);
  yield put(AuthActions.logoutDestroyData())
}