import React from "react";
import CheckoutDetai from "../checkout/CheckoutDetail";
import CheckoutTotal from "../checkout/CheckoutTotal";
// const CheckoutDetai = React.lazy(() => {import('../checkout/CheckoutDetail')});
// const CheckoutTotal = React.lazy(() => {import('../checkout/CheckoutTotal')});

const Checkout = () => {
  return (
    <div className="container mt-2 mb-5" style={{ minHeight: "70vh" }}>
      <h4 className="fst-italic fw-normal text-uppercase ms-3">
        billing details
      </h4>
      <div className="row">
        <div className="col-12 col-lg-8">
          <CheckoutDetai></CheckoutDetai>
        </div>
        <div className="col-12 col-lg-4">
          <CheckoutTotal></CheckoutTotal>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
