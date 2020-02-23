import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux'

import { getDetailData } from './actions';

import '../../styles/detailview.scss'

function DetailView({ getDetailData }) {
  const { productID } = useParams();

  useEffect(() => {
    getDetailData({ productID })
  }, [getDetailData, productID])

  return (
    <div>
      This is Detail page
      <Link to='/12'>
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
    getDetailData: (payload) => dispatch(getDetailData(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView);
