import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../stores/cart";

const CartItem = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const formatterVND = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });

  const increaseAmount = () => {
    dispatch(
      cartActions.updateStepAmountProductCart({
        type: "INCREASE",
        productID: props.productID,
      })
    );
  };

  const decreaseAmount = () => {
    dispatch(
      cartActions.updateStepAmountProductCart({
        type: "DECREASE",
        productID: props.productID,
      })
    );
  };
  const removeProduct = () => {
    dispatch(
      cartActions.removeProduct({
        productID: props.productID,
      })
    );
  };
  return (
    <Fragment>
      <tr className="">
        <td>
          <img
            style={{ width: "4rem" }}
            className="object-fit-cover p-1"
            src={props.productDetail.img1}
            alt=""
          />
        </td>
        <td className="align-middle text-break">
          <h6>{props.productDetail.name}</h6>
        </td>
        <td className="align-middle text-break">
          {formatterVND.format(props.productDetail.price)}
        </td>
        <td className="align-middle ">
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-caret-left p-2"
            onClick={decreaseAmount}
          ></i>
          <span className="fw-normal p-2">&nbsp;{props.amount}&nbsp;</span>
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-caret-right p-2"
            onClick={increaseAmount}
          ></i>
        </td>
        <td className="align-middle text-break">
          {formatterVND.format(props.total)}
        </td>
        <td className="align-middle ">
          <i
            style={{ cursor: "pointer" }}
            onClick={removeProduct}
            className="fas fa-trash-alt"
          ></i>
        </td>
      </tr>
    </Fragment>
  );
};

export default CartItem;
