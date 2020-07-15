import { all, takeLatest } from 'redux-saga/effects';
import { Types as AuthTypes } from '../stores/auth/Actions';
import { Types as ExampleTypes } from '../stores/example/Actions';
import { StartupTypes } from '../stores/startup/Actions';
import { login, logout } from './AuthSaga';
import { exampleFunction } from './ExampleSaga';
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
  ]);
}
