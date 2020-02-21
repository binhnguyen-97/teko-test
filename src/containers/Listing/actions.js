import {
  GET_LISTING_DATA,
  GET_LISTING_DATA_SUCCESS,
  GET_LISTING_DATA_FAIL
} from './constants';

export const getListingData = ({ query }) => {
  return {
    type: GET_LISTING_DATA,
    payload: {
      query
    }
  }
}
export const getListingDataSuccess = (data) => {
  return {
    type: GET_LISTING_DATA_SUCCESS,
    payload: {
      products: data.products
    }
  }
}
export const getListingDataFail = (error) => {
  return {
    type: GET_LISTING_DATA_FAIL,
    payload: {
      error
    }
  }
}


