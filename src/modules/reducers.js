import { combineReducers } from 'redux'

import listingReducer from '../containers/Listing/reducer'
import detailReducer from '../containers/DetailView/reducer'

export default combineReducers({
  listing: listingReducer,
  productDetail: detailReducer,
});
