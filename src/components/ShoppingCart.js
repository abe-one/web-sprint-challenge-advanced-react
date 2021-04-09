import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

/********* DO NOT DO ANYTHING IN THIS COMPONENT *********/

export default function ShoppingCart(props) {
  const total = props.cart.reduce((sum, d) => sum + d.price, 0);

  const [bool, setBool] = useLocalStorage("bool", true);

  return (
    <div className="cart">
      <button onClick={(e) => setBool(!bool)}></button>
      {props.cart.map((plant) => (
        <div className="plant-card" key={plant.id}>
          <img className="plant-image" src={plant.img} alt={plant.name} />
          <div className="plant-details">
            <h2 className="plant-name">{plant.name}</h2>
            <p>${plant.price}</p>
            <button
              className="plant-button"
              onClick={() => props.removeFromCart(plant)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="checkout-section">
        <p className="total">Total: ${total}</p>
        <button
          className="checkout"
          onClick={() => props.history.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
