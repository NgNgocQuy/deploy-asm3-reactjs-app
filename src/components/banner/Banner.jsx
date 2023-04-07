import React from "react";
import classes from "./Banner.module.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="container position-relative mb-5">
      <img
        src="./image/banner1.jpg"
        className={classes[`__image-fit`]}
        alt=""
      />
      <div
        style={{ width: "22rem" }}
        className="position-absolute top-50 start-0 translate-middle-y ps-5 fst-italic"
      >
        <div className="d-flex flex-column justify-content-start align-items-start gap-1 ms-2">
          <h6 className="text-uppercase fw-light " style={{ opacity: "0.88" }}>
            new inspriration 2020
          </h6>
          <h2 style={{ letterSpacing: "2px" }} className="text-uppercase">
            20% off on new season
          </h2>
          <button
            style={{ opacity: "0.88" }}
            className="btn btn-dark rounded-0 d-inline-block mt-1"
          >
            <Link to={"/shop"} className="text-light">
              <h5 className="d-inline-block ps-2 pe-2 pt-1 fw-light fst-italic">
                Browse collections
              </h5>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
