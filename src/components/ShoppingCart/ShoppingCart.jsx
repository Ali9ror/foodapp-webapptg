import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';
import { serv } from '../../data';

export default function ShoppingCart({ id, name, description, amount_in_cart, price }) {
  const [data, setData] = useState({ [id]: { name, description, amount_in_cart, price } });

  if (data[id].amount_in_cart > 0) {
    return (
      <div className="shopping-cart">
        <div className="item">
          <div className="description">
            <span>{data[id].name}</span>
            <span>{data[id].description}</span>
          </div>
   
          <div className='counter-wrap'>
            <b>{data[id].amount_in_cart} шт. x {data[id].price}p.</b>
          </div>
          <div className="total-price">{data[id].amount_in_cart * data[id].price}</div>
        </div>
      </div>
    );
  } else {
    return null; 
  }
}
