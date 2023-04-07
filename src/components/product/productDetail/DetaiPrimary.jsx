import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../stores/cart";
import { useNavigate } from "react-router-dom";
// import
const DetaiPrimary = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [change, setChange] = useState(false);
  const login = useSelector((state) => state.user.login);

  const submitHandler = (event) => {
    event.preventDefault();
    if (login === true) {
      amount > 0 &&
        dispatch(
          cartActions.addProductToCart({
            productID: props._id[`$oid`],
            productDetail: props,
            amount: amount,
          })
        );
    } else {
      navigate("/login");
    }
    // let submitValue = {}
    //productID ,productDetail: props.product, amount , price
    // console.log(props._id[`$oid`]);
  };

  const increaseAmount = () => {
    setChange(true);
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    setChange(true);
    amount > 0 && setAmount(amount - 1);
  };
  const changeAmount = (event) => {
    setChange(true);
    setAmount(event.target.value);
  };
  const formatterVND = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });
  useEffect(() => {
    setAmount(0);
  }, [props]);
  return (
    <Fragment>
      <h2 className=" me-5 fw-normal"> {props.name} </h2>
      <p style={{ opacity: ".8" }}>{formatterVND.format(props.price)}</p>
      <p className="me-5 pe-5">{props.short_desc}</p>
      <div style={{ fontWeight: "500" }} className="fs-5">
        CATEGORY&nbsp;:&nbsp;
        <span className="fw-normal fs-5 text-capitalize">{props.category}</span>
      </div>
      <form action="" className=" d-flex flex-row " onSubmit={submitHandler}>
        <div
          style={{ width: "14rem" }}
          className="d-flex flex-row justify-content-between align-items-center form-control p-0 rounded-0"
        >
          <input
            type="number"
            min={0}
            step={1}
            className="form-control border-0 text-uppercase fst-italic"
            value={change && amount}
            onChange={changeAmount}
            placeholder="Quantity"
          />
          {/* <div className="form-control  border-0 "> */}
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-caret-left p-2"
            onClick={decreaseAmount}
          ></i>
          <span className="fw-normal p-2">&nbsp;{amount}&nbsp;</span>
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-caret-right p-2"
            onClick={increaseAmount}
          ></i>
        </div>
        <button
          type="submit"
          className="btn btn-dark fst-italic rounded-0 ps-4 pe-4"
        >
          Add to cart
        </button>
      </form>
    </Fragment>
  );
};

export default DetaiPrimary;
