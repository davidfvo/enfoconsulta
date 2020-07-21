import {all, takeLatest} from 'redux-saga/effects';
import {Types as AuthTypes} from '../stores/auth/Actions';
import {Types as ExampleTypes} from '../stores/example/Actions';
import {StartupTypes} from '../stores/startup/Actions';
import {login, logout} from './AuthSaga';
import {exampleFunction} from './ExampleSaga';
import appSagas,{appStart} from './quick-blox/app';
import authSagas from './quick-blox/auth';
import chatSagas from './quick-blox/chat';
import dialogsSagas from './quick-blox/dialogs';
import eventsSagas from './quick-blox/events';
import fileSagas from './quick-blox/file';
import infoSagas from './quick-blox/info';
import messagesSagas from './quick-blox/messages';
import netInfoSagas from './quick-blox/netinfo';
import QBeventsSagas from './quick-blox/QBevents';
import usersSagas from './quick-blox/users';
import webRTCSagas from './quick-blox/webrtc';
import startup from './StartupSaga';

export default function* root () {
  yield all ([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest (StartupTypes.STARTUP, startup),

    // Auth & Miscellanea types
    takeLatest (AuthTypes.LOGIN, login),
    takeLatest (AuthTypes.LOGOUT, logout),
    takeLatest (ExampleTypes.EXAMPLE_PAYLOAD, exampleFunction),
    
    //QUICKBLOX
    ...appSagas,
    ...authSagas,
    ...chatSagas,
    ...dialogsSagas,
    ...messagesSagas,
    ...fileSagas,
    ...eventsSagas,
    ...infoSagas,
    ...usersSagas,
    ...webRTCSagas,
    ...QBeventsSagas,
    ...netInfoSagas,
  ]);
}
