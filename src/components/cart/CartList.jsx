import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartList = () => {
  const productList = useSelector((state) => state.cart.product);
  // console.log(productList);

  return (
    <Fragment>
      <div className="table-responsive text-center fst-italic ">
        <table
          className="table table-striped table-hover"
          style={{ minHeight: "12rem" }}
        >
          <thead className="text-uppercase fw-normal">
            <tr>
              <th scope="col">mage</th>
              <th scope="col">product</th>
              <th scope="col">price</th>
              <th scope="col">quantity</th>
              <th scope="col">total</th>
              <th scope="col">remove</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((e, i) => (
              <CartItem key={i} {...e}></CartItem>
            ))}
          </tbody>
        </table>
        <div
          className="d-flex flex-wrap justify-content-between  p-4"
          style={{ backgroundColor: "rgb(241,243,245)" }}
        >
          <Link to={`/shop`}>
            <button className="btn btn-outline-dark border-light rounded-0 fw-normal fst-italic pe-3">
              <i className="fas fa-long-arrow-alt-left"></i>
              &nbsp;Continue shopping
            </button>
          </Link>
          <Link
            to={`/cart/checkout`}
            className="text-decoration-none text-reset"
          >
            <button className="btn btn-outline-dark rounded-0 ps-3 pe-3 fw-normal fst-italic">
              Proceed to checkout&nbsp;
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default CartList;
