import React, { useEffect, Fragment, lazy } from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import isEmpty from 'lodash.isempty';

import { getListingData } from './actions';

import useQuery from '../../utils/hooks/useQuery'

import '../../styles/listing.scss'

const Spinner = lazy(() => import('../../components/Spinner'));
const ProductItem = lazy(() => import('../../components/ProductItem'));
const PaginationBar = lazy(() => import('../../components/PaginationBar'));

function Listing({ getListingData, productList, totalPage }) {
  let queryHook = useQuery();
  const query = queryHook.get("q");
  const page = queryHook.get("page");

  useEffect(() => {
    getListingData({ query, page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [getListingData, query, page])

  return ( isEmpty(productList) ? <Spinner/> : 
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
              price={product.promotionPrices[0]}
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
