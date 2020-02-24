/* eslint-disable no-restricted-globals */
import React from 'react';

import { formatPrice } from "../../utils/helpers";

function DetailHeader({ name, price, itemSelected }) {
  return (
    <header className="detail-header">
      <nav className="detail-nav">
        <div className="back-button" onClick={() => history.back()} />
        <div className="product-info">
          <div className="product-info__name">
            {`${name.substr(0,20)} ...`}
          </div>
          <div className="product-info__price">
            {formatPrice(price)}
          </div>
        </div>
        <div className="cart">
          <span className="cart__bagde">{itemSelected}</span>
        </div>
      </nav>
    </header>
  )
}

export default DetailHeader
