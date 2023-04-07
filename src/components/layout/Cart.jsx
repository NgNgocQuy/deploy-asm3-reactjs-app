import React from "react";
import CartList from "../cart/CartList";
import CartTotal from "../cart/CartTotal";
// const CartList = React.lazy(() => {import('../cart/CartList')});
// const CartTotal = React.lazy(() => {import('../cart/CartTotal')});
const CartContaner = () => {
  return (
    <div className="container p-0 mt-2 mb-5" style={{ minHeight: "70vh" }}>
      <div className="row justify-content-center  g-2">
        <div className="col col-md-8">
          <CartList></CartList>
        </div>
        <div className="col col-md-4">
          <CartTotal></CartTotal>
        </div>
      </div>
    </div>
  );
};

export default CartContaner;
