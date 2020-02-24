import React, { useEffect, Fragment } from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'

import ProductItem from '../../components/ProductItem'
import PaginationBar from '../../components/PaginationBar'

import { getListingData } from './actions';

import useQuery from '../../utils/hooks/useQuery'

import '../../styles/listing.scss'

function Listing({ getListingData, productList, totalPage }) {
  let queryHook = useQuery();
  const query = queryHook.get("q");
  const page = queryHook.get("page");

  useEffect(() => {
    getListingData({ query, page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [getListingData, query, page])

  return (
    <Fragment>
      <Helmet>
        <title>Danh sách sản phẩm</title>
        <meta name="description" content="Trang thông tin danh sách các sản phẩm hiện đang có ở hệ thống" />
      </Helmet>
      <div className="listing__container">
        {
          productList.map(product => {
            return <ProductItem
              key={`product_${product.sku}`}
              id={product.sku}
              name={product.displayName || product.name}
              images={product.images}
              status={product.status}
              price={product.price}
            />
          })
        }
      </div>
      <PaginationBar
        currentPage={parseInt(page, 10) || 1}
        totalPage={totalPage}
      />
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    productList: state.listing.productList,
    totalPage: state.listing.totalPage,
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
