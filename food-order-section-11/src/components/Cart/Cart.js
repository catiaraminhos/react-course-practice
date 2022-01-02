import React from "react";

import Card from "../UI/Card";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Card>
      {cartItems}

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$88.99</span>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.button}>
          Close
        </button>
        <button type="button" className={styles["button--alt"]}>
          Order
        </button>
      </div>
    </Card>
  );
};

export default Cart;
