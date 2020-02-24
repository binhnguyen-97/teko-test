import React, { Fragment } from 'react'

import ShowCaseSlider from '../ShowCaseSlider';
import SellInfo from '../SellInfo';
import InfoSection from '../InfoSection';
import DetailHeader from '../DetailHeader';

function ProductDetail({
  images,
  name,
  productID,
  status,
  promotionPrice = {},
  attributeGroups = [],
  seoInfo = {} }) {
  return (
    <Fragment>
      <DetailHeader
        name={name}
        price={promotionPrice.bestPrice}
        itemSelected={12}
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
      </div>
    </Fragment>
  )
}

export default ProductDetail
