import './Card.css';
import { serv } from "../../data";
import { useState } from "react";

export default function Card({ id, name, price, img_source, onToggle, cartProducts, setDataSet, data }) {
  const [count, setCount] = useState(data[id - 3].amount_in_cart);

  const updateCartOnServer = async (productId, newAmount) => {
    try {
      await fetch(`${serv}menu/0/update_cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ position_id: productId, amount: newAmount }),
      });
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleAddProductToCart = (productId) => {
    onToggle([...cartProducts, productId]);
    setCount(1);
    data[id - 3].amount_in_cart = 1;
    updateCartOnServer(productId, 1);
  };

  const handleRemoveFromCart = (productId) => {
    const newCartProducts = cartProducts.filter((id) => id !== productId);
    onToggle(newCartProducts);
    setCount(0);
    data[id - 3].amount_in_cart = 0;
    updateCartOnServer(productId, 0);
  };

  const plusFunction = () => {
    const newCount = count + 1;
    setCount(newCount);
    data[id - 3].amount_in_cart = newCount;
    updateCartOnServer(id, newCount);
  };

  const minusFunction = () => {
    if (count - 1 === 0) {
      handleRemoveFromCart(id);
    } else {
      const newCount = count - 1;
      setCount(newCount);
      data[id - 3].amount_in_cart = newCount;
      updateCartOnServer(id, newCount);
    }
  };

  return (
    <div className="card">
      <div className="card__top">
        <a href={`/food/${id}`} className="card__image">
          <img src={img_source} alt="Not found" />
        </a>
      </div>
      <div className="card__bottom">
        <div className="card__prices">{price}</div>
        <a href={`/food/${id}`} className="card__title">
          {name}
        </a>
      </div>
      {count === 0 ? (
        <button
          className="card__add"
          onClick={() => handleAddProductToCart(id)}
          type="primary"
        >
          В корзину
        </button>
      ) : (
        <div className="counter">
          <button
            className="button-primary minus"
            data-id={id}
            onClick={() => minusFunction(id)}
          >
            -
          </button>
          <b>{count}</b>
          <button
            className="button-primary plus"
            data-id={id}
            onClick={() => plusFunction(id)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
