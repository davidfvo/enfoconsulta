import {put, call} from 'redux-saga/effects';
import ExampleActions from '../stores/example/Actions';
import ExampleService from '../services/ExampleService';
import ResponseCode from '../services/ResponseCode';
import { IS_MOCKED } from '../utils/MockUtil';

export function* exampleFunction (request) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put (ExampleActions.exampleLoading ());

  const response = IS_MOCKED ?
    'TODO' : //TODO - put the proper mocked response -- GILGAMESH
    yield call (ExampleService.getHistory, request.payload);

  if (!response) {
    yield put (ExampleActions.exampleFailure ({...ResponseCode.BAD_REQUEST}));
    return
  }

  const result = {
    ...response
  }

  yield put (ExampleActions.exampleSuccess (result));
}

export function* exampleMultiCalling (request) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put (ExampleActions.exampleLoading ());

  const [email, direction, phone, insurance] = IS_MOCKED ?
    [{},{},{},{}] : //TODO - put the proper mocked response -- GILGAMESH
    yield all([
      call(clientEmail, request.payload.email),
      call(clientDirection, request.payload.direction),
      call(clientPhone, request.payload.phone),
      call(clientInsurance, request.payload.insurance)
    ]);

  if (!response) {
    yield put (ExampleActions.exampleFailure ({...ResponseCode.BAD_REQUEST}));
    return
  }

  const result = {
    email,
    direction,
    phone,
    insurance,
  }

  yield put (ExampleActions.exampleSuccess (result));
}