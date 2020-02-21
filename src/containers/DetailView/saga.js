import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../utils/request';
import config from '../../config';

import { getDetailDataSuccess, getDetailDataFail } from "./actions";
import { GET_DETAIL_DATA } from "./constants";

export function* getListingDataSaga({ payload }) {
  try {
    const { productID } = payload;
    const respone = yield call(request, `${config.apiUrl}/products/${productID}?channel=pv_online&terminal=phongvu`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (respone.code !== 'SUCCESS') {
      yield put(getDetailDataFail('Some things does\'t work'));
    }
    yield put(getDetailDataSuccess(respone.result));
  } catch (error) {
    yield put(getDetailDataFail(error));
  }
}

export default function* root() {
  yield takeLatest(GET_DETAIL_DATA, getListingDataSaga)
}

