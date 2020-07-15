import { call, put, takeLatest } from 'redux-saga/effects'
import QB from 'quickblox-react-native-sdk'

import { getInfoFail, getInfoSuccess } from '../../stores/quick-blox/actions'
import { GET_INFO_REQUEST } from '../../stores/quick-blox/constants'

export function* getSdkInfo() {
  try {
    const settings = yield call(QB.settings.get)
    yield put(getInfoSuccess(settings))
  } catch (e) {
    yield put(getInfoFail(e.message))
  }
}

export default [
  takeLatest(GET_INFO_REQUEST, getSdkInfo),
]