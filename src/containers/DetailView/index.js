import React, { useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import isEmpty from 'lodash.isempty';

import { getDetailData } from './actions';
import { addToCart } from '../../modules/actions/cart';

import { sortByPriority } from '../../utils/helpers';

import '../../styles/detailview.scss'

const ProductDetail = lazy(() => import('../../components/ProductDetail'));
const Spinner = lazy(() => import('../../components/Spinner'));


function DetailView({ getDetailData, productDetail, addToCart, cart, addSuccess }) {
  const { productID } = useParams();

  useEffect(() => {
    getDetailData({ productID })
  }, [getDetailData, productID])
  return (isEmpty(productDetail) ? 
    <Spinner/> :
    <div>
      <Helmet>
        <title>{productDetail.seoInfo.metaTitle}</title>
        <meta name="description" content={productDetail.seoInfo.metaDescription} />
      </Helmet>
      <ProductDetail 
        productID={productDetail.sku}
        images={sortByPriority(productDetail.images)}
        name={productDetail.displayName ?? productDetail.name}
        status={productDetail.status}
        promotionPrice={productDetail.promotionPrices[0]}
        attributeGroups={productDetail.attributeGroups}
        seoInfo={productDetail.seoInfo}
        addToCart={addToCart}
        cart={cart}
        addSuccess={addSuccess}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    productDetail: state.productDetail.productDetail,
    cart: state.cart.cart,
    addSuccess: state.cart.success,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getDetailData: (payload) => dispatch(getDetailData(payload)),
    addToCart: (payload) => dispatch(addToCart(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView);
