import { delay } from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import { AGE_UP, AGE_DOWN, AGE_UP_FROM_SAGA } from '../actions/actionTypes';



function* asynchAgeUp() {
  yield delay(1000)
  yield put({ type: AGE_UP_FROM_SAGA, value: 1 })
}


export function* watchAgeUp() {
  yield takeEvery(AGE_UP, asynchAgeUp)
}