import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const CheckoutTotal = () => {
  const total = useSelector((state) => state.cart.sumTotal);
  const productList = useSelector((state) => state.cart.product);
  // console.log(total);
  const formatterVND = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });
  return (
    <Fragment>
      <div
        className="mt-3 ms-4 p-4 "
        style={{ backgroundColor: "rgb(241,243,245)" }}
      >
        <div className="fst-italic text-uppercase mb-3 d-flex flex-column gap-2">
          <h4 className="mb-4 ">cart total</h4>
          {productList.map((e, i) => (
            <div className="row border-bottom">
              <h6 className="col-12 col-xl-7">{e.productDetail.name}</h6>
              <div className="col-12 col-xl-5">
                <span style={{ fontSize: "0.8rem" }}>
                  {formatterVND.format(e.total)}
                </span>
                <span style={{ fontSize: "0.8rem" }}>
                  &nbsp;x&nbsp;{e.amount}
                </span>
              </div>
            </div>
          ))}
          <hr />
          <div className="d-flex flex-wrap justify-content-between">
            <h5>total</h5> <h5>{formatterVND.format(total)}</h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckoutTotal;
