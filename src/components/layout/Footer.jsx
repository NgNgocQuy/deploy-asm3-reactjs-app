import React from "react";
import Message from "../../components/liveChat/Message";
// const Message = React.lazy(() => {import('../product/productRecommended/ProductRecommendedList')});

const Footer = () => {
  return (
    <div
      style={{ letterSpacing: "1px" }}
      className="bg-dark fst-italic text-light pt-5 pb-5 mt-2"
    >
      <Message></Message>

      <div className="container pb-3 pt-3">
        <div className="row">
          <div className="col col-md-4">
            <h5 className="text-uppercase mb-4">customer services</h5>
            <div className="d-flex flex-column gap-2 ">
              <span>Lorem ipsum dolor</span>
              <span>Lorem ipsum dolor</span>
              <span>Lorem ipsum dolor</span>
              <span>Lorem ipsum dolor</span>
            </div>
          </div>
          <div className="col col-md-4">
            <h5 className="text-uppercase mb-4">company</h5>
            <div className="d-flex flex-column gap-2 ">
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div className="col col-md-4">
            <h5 className="text-uppercase mb-4"> social media</h5>
            <div className="d-flex flex-column gap-2 ">
              <span>Lorem</span>
              <span>Lorem</span>
              <span>Lorem</span>
              <span>Lorem</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
