import {
  GET_LISTING_DATA,
  GET_LISTING_DATA_SUCCESS,
  GET_LISTING_DATA_FAIL
} from './constants';

export const getListingData = ({ query, page }) => {
  return {
    type: GET_LISTING_DATA,
    payload: {
      query,
      page
    }
  }
}
export const getListingDataSuccess = (data, paging) => {
  return {
    type: GET_LISTING_DATA_SUCCESS,
    payload: {
      products: data.products,
      pagingData: paging
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


