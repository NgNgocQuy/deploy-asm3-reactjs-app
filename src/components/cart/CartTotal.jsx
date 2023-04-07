import React from "react";

import { useSelector } from "react-redux";

const CartTotal = () => {
  const total = useSelector((state) => state.cart.sumTotal);
  // console.log(total);
  const formatterVND = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className=" ms-4 p-4 " style={{ backgroundColor: "rgb(241,243,245)" }}>
      <div className="fst-italic text-uppercase mb-3">
        <h4 className="mb-4 ">cart total</h4>
        <div className="d-flex flex-row justify-content-between">
          <h5>subtotal</h5> <span>{formatterVND.format(total)}</span>
        </div>
        <hr />
        <div className="d-flex flex-row justify-content-between">
          <h5>total</h5> <h5>{formatterVND.format(total)}</h5>
        </div>
      </div>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text "
          className="form-control rounded-0"
          placeholder="Enter you coupon"
        />
        <button type="submit" className="btn btn-dark rounded-0 w-100">
          apply coupon
        </button>
      </form>
    </div>
  );
};

export default CartTotal;
