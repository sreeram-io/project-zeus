
import { all, takeLatest } from 'redux-saga/effects';

import loadDataSaga from '@/store/app/app.api';
import appActions from '@/store/app/app.const';

export default function* rootSaga() {
  yield all([
    takeLatest(appActions.LOAD_DATA, loadDataSaga),
  ])
}
