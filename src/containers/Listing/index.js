import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { getListingData } from './actions';

import '../../styles/listing.scss'

function Listing({ getListingData, listing }) {

  useEffect(() => {
    getListingData({ text: 'Hello Sage' })
  }, [])

  return (
    <div>
      This is Listing page
      <Link to='/1809504'>
        Go to detail view
      </Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    productList: state.listing.productList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getListingData: (payload) => dispatch(getListingData(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);
