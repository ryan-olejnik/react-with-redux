import { delay } from 'redux-saga';
import { takeEvery, all, put } from 'redux-saga/effects';
import { AGE_UP, AGE_DOWN, AGE_UP_FROM_SAGA, AGE_DOWN_FROM_SAGA } from '../actions/actionTypes';

function* asynchAgeUp() {
  console.log('aging up 1 year...')
  yield delay(500)
  yield put({ type: AGE_UP_FROM_SAGA, value: 1 })
}


function* asynchAgeDown() {
  console.log('aging down 2 years...')
  yield delay(2000)
  yield put({ type: AGE_DOWN_FROM_SAGA, value: 2 })
}


export function* rootSaga() {
  yield all([
    takeEvery(AGE_UP, asynchAgeUp),
    takeEvery(AGE_DOWN, asynchAgeDown)
  ])
}





