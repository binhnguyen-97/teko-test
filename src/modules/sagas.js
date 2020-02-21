import { all } from 'redux-saga/effects';

import ListingSaga from "../containers/Listing/saga";
import DetailSaga from "../containers/DetailView/saga";

export default function* rootSaga() {
  yield all([
    ListingSaga(),
    DetailSaga()
  ]);
}
