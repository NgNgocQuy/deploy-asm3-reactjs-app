import React from "react";
import { Link } from "react-router-dom";

const CategoriesIntroProduct = () => {
  return (
    <div className="container mb-5">
      <div
        style={{ letterSpacing: ".8px" }}
        className="d-flex flex-column align-items-center fst-italic text-uppercase"
      >
        <h6 style={{ opacity: ".5" }}>carefully created collections</h6>
        <h4> browser our categories</h4>
      </div>
      <div className="row ">
        <div className="col-12 col-md-6 p-3">
          <Link
            to={`./shop`}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <img
              src="./image/product_1.png"
              alt=""
              className="object-fit-cover rouded-3"
              style={{ width: "100%" }}
            />
          </Link>
        </div>

        <div className="col-12 col-md-6 p-3">
          <Link
            to={`./shop`}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <img
              src="./image/product_2.png"
              alt=""
              className="object-fit-cover rouded-3"
              style={{ width: "100%" }}
            />
          </Link>
        </div>
        <div className="col-12 col-md-4 p-3">
          <Link
            to={`./shop`}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <img
              src="./image/product_3.png"
              alt=""
              className="object-fit-cover rouded-3"
              style={{ width: "100%" }}
            />
          </Link>
        </div>
        <div className="col-12 col-md-4 p-3">
          <Link
            to={`./shop`}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <img
              src="./image/product_4.png"
              alt=""
              className="object-fit-cover rouded-3"
              style={{ width: "100%" }}
            />
          </Link>
        </div>
        <div className="col-12 col-md-4 p-3">
          <Link
            to={`./shop`}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <img
              src="./image/product_5.png"
              alt=""
              className="object-fit-cover rouded-3"
              style={{ width: "100%" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesIntroProduct;
