import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getDisplayImage, formatPrice } from '../../utils/listing_utils';
import { SALE_STATUS } from '../../utils/constants';


function ProductItem({ name, images, status, price, id }) {

  const isSelling = status.sale === SALE_STATUS.DANG_BAN;
  return (
    <Link
      className="product"
      to={{
        pathname: `/detail/${id}`,
      }}>
      <img className="product__thumbnail"
        src={getDisplayImage(images)}
        alt='product-thumbnail' />
      <div className="product__info">
        <div className="Info__name">
          {name}
        </div>
        <div className={`info__price info__price--${isSelling ? 'selling' : 'stop-selling'}`}>
          {isSelling ? formatPrice(price.sellPrice) : "Ngưng kinh doanh"}
        </div>
      </div>
    </Link>
  )
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.array,
  price: PropTypes.shape({
    supplierSalePrice: PropTypes.number,
    sellPrice: PropTypes.number,
  }),
  status: PropTypes.shape({
    publish: PropTypes.bool,
    sale: PropTypes.string,
  }),
}

export default ProductItem

