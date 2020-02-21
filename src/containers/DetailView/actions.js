import {
  GET_DETAIL_DATA,
  GET_DETAIL_DATA_SUCCESS,
  GET_DETAIL_DATA_FAIL
} from './constants';

export const getDetailData = ({ productID }) => {
  return {
    type: GET_DETAIL_DATA,
    payload: {
      productID
    }
  }
}
export const getDetailDataSuccess = (data) => {
  return {
    type: GET_DETAIL_DATA_SUCCESS,
    payload: {
      product: data.product
    }
  }
}
export const getDetailDataFail = (error) => {
  return {
    type: GET_DETAIL_DATA_FAIL,
    payload: {
      error
    }
  }
}


