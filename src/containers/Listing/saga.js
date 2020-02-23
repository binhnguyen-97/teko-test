import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../utils/request';
import config from '../../config';

import { getListingDataSuccess, getListingDataFail } from "./actions";
import { GET_LISTING_DATA } from "./constants";

export function* getListingDataSaga({ payload }) {
  try {
    const { query, page } = payload;
    const respone = yield call(request, `${config.apiUrl}/search/?channel=pv_online&terminal=phongvu&publishStatus=true&_limit=${config.pageSize}&_page=${page || 1}&q=${query || ''}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (respone.code !== 'SUCCESS') {
      yield put(getListingDataFail('Some things does\'t work'));
    }
    yield put(getListingDataSuccess(respone.result, respone.extra));
  } catch (error) {
    console.error(error);
    yield put(getListingDataFail(error));
  }
}

export default function* root() {
  yield takeLatest(GET_LISTING_DATA, getListingDataSaga)
}

