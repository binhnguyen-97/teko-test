import React, { Fragment, useState } from 'react'

import ShowCaseSlider from '../ShowCaseSlider';
import SellInfo from '../SellInfo';
import InfoSection from '../InfoSection';
import DetailHeader from '../DetailHeader';
import SimilarProduct from '../SimilarProduct';
import AddtoCartBar from '../AddtoCartBar';
import SnackBar from '../SnackBar';

function ProductDetail({
  images,
  name,
  productID,
  status,
  addToCart,
  addSuccess,
  promotionPrice = {},
  attributeGroups = [],
  cart = [],
  seoInfo = {} }) {

  const [showSnackBar, setshowSnackBar] = useState(false);
  const [added, setAdd] = useState(false);

  const toggleSnackBar = (setFunc, value) => {
    setFunc(value);
    return setTimeout(() => setFunc(!value), 3000);
  }
  const addToCartHandler = ({ amount }) => {
    if(!amount || amount === 0 ) {
      setAdd(false);
      return toggleSnackBar(setshowSnackBar,true);
    }
    addToCart({ item: {
      name,
      productID,
      price: promotionPrice.bestPrice
    }, amount});
    setAdd(true);
    return setTimeout(() => toggleSnackBar(setshowSnackBar,true), 200);
  }

  return (
    <Fragment>
      <DetailHeader
        name={name}
        price={promotionPrice.bestPrice}
        itemSelected={cart.length}
      />
      <div className="product-detail">
        <ShowCaseSlider
          images={images}
        />
        <SellInfo
          name={name}
          productID={productID}
          status={status}
          promotionPrice={promotionPrice}
        />
        <InfoSection
          attributeGroups={attributeGroups}
          seoInfo={seoInfo}
        />
        <SimilarProduct />
      </div>
      {status.sale && status.sale !== 'ngung_kinh_doanh' && <AddtoCartBar
          price={promotionPrice.bestPrice}
          addToCart={addToCartHandler}
      />}
      {showSnackBar && <SnackBar success={addSuccess && added}/>}
    </Fragment>
  )
}

export default ProductDetail
