import { GET_LISTING_DATA, GET_LISTING_DATA_SUCCESS, GET_LISTING_DATA_FAIL } from "./constants";

const initialState = {
  productList: [],
  totalPage: 1,
  loading: false,
  err: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LISTING_DATA:
      return { ...state, loading: true, err: '' }
    case GET_LISTING_DATA_SUCCESS:
      const {
        products,
        pagingData
      } = payload;
      const { totalItems, pageSize } = pagingData;
      return { ...state, productList: products, totalPage: Math.round(totalItems / pageSize), loading: false }
    case GET_LISTING_DATA_FAIL:
      return { ...state, err: payload.error, loading: false }
    default:
      return state
  }
}
