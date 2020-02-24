import { GET_DETAIL_DATA, GET_DETAIL_DATA_SUCCESS, GET_DETAIL_DATA_FAIL } from "./constants";

const initialState = {
  productDetail: {},
  loading: false,
  err: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_DATA:
      return { ...state, loading: true, err: '' }
    case GET_DETAIL_DATA_SUCCESS:
      return { ...state, productDetail: payload.product, loading: false }
    case GET_DETAIL_DATA_FAIL:
      return { ...state, err: payload.error, loading: false }

    default:
      return state
  }
}
