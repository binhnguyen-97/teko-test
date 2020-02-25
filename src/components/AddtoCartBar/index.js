import React, { useState } from 'react';

import { formatPrice } from "../../utils/helpers";

const TYPE = {
  ADD: 'add',
  REMOVE: 'remove'
}

function AddtoCardBar({ price = 0, addToCart }) {

  const [amount, setAmount] = useState(0);

  const updateAmount = (type) => {
    if (type === TYPE.ADD) {
      return setAmount(amount + 1);
    } else {
      if(amount === 0) return;
      return setAmount(amount - 1)
    }
  }

  return (
    <div className="add-to-cart">
      <div className="add-to-cart__action-block">
        <div className="add-to-cart__action-block--remove" onClick={() => updateAmount('remove')}/>
        <div className="add-to-cart__action-block--display">{amount}</div>
        <div className="add-to-cart__action-block--add" onClick={() => updateAmount('add')} />
      </div>
      <div className="add-to-cart__price-total" onClick={() => addToCart({amount})}>
        <div className="add-to-cart__price-total--cart-icon" />
        <div className="add-to-cart__price-total--display">{formatPrice(price * amount)}</div>
      </div>
    </div>
  )
}

export default AddtoCardBar
