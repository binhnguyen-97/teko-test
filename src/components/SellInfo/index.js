import React from 'react'
import PropTypes from 'prop-types'

import { getPromotionInfo, formatPrice } from "../../utils/helpers";
import { STATUS_TEXT, SALE_STATUS } from '../../utils/constants'

function SellInfo({ name, productID, status, promotionPrice }) {

  const { bestPrice, finalPrice } = promotionPrice;
  const { isSale, percentage } = getPromotionInfo(promotionPrice);
  const isOutofStock = status.sale !== SALE_STATUS.DANG_BAN;

  return (
    <div className="price-info">
      <div className="price-info__name">{name}</div>
      <div className="price-info__id">Mã SP: <span className="price-info__id--highlight">{productID}</span></div>
      {isOutofStock && <div className="price-info__status">{STATUS_TEXT[status.sale]}</div>}
      <div className="price-info__price-block">
        {bestPrice && parseInt(bestPrice,10) !== 0 && <div className="real-price">
          {formatPrice(bestPrice)}
        </div>}
        {isSale && <><div className="old-price">
          {formatPrice(finalPrice)}
        </div>
          <div className="promote-percent">-{percentage}%</div>
        </>}
      </div>
    </div>
  )
}

SellInfo.prototype = {
  name: PropTypes.string.isRequired,
  productID: PropTypes.number.isRequired,
  status: PropTypes.shape({
    sale: PropTypes.string,
  }),
  promotionPrice: PropTypes.shape({
    bestPrice: PropTypes.number,
    finalPrice: PropTypes.number,
  }),
}

export default SellInfo
