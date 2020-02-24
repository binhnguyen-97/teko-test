import React, { useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import isEmpty from 'lodash.isempty';

import { getDetailData } from './actions';

import { sortByPriority } from '../../utils/helpers';

import '../../styles/detailview.scss'

const ProductDetail = lazy(() => import('../../components/ProductDetail'));
const Spinner = lazy(() => import('../../components/Spinner'));


function DetailView({ getDetailData, productDetail }) {
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
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    productDetail: state.productDetail.productDetail
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
