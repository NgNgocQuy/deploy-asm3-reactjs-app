import React, { Fragment } from "react";

const CheckoutDetai = () => {
  return (
    <Fragment>
      <form
        action=""
        className="d-flex flex-column gap-2 fst-italic fw-normal p-2"
      >
        <div className="">
          <lable htmlFor="fullname" className="p-2 text-uppercase">
            fullname:
          </lable>
          <input
            id="fullname"
            type="text"
            className="form-control m-2 rounded-1"
          />
        </div>
        <div className="">
          <lable htmlFor="email" className="p-2 text-uppercase">
            email:
          </lable>
          <input
            id="email"
            type="text"
            className="form-control m-2 rounded-1"
          />
        </div>
        <div className="">
          <lable htmlFor="phone" className="p-2 text-uppercase">
            phone number:
          </lable>
          <input
            id="phone"
            type="text"
            className="form-control m-2 rounded-1"
          />
        </div>
        <div className="">
          <lable htmlFor="address" className="p-2 text-uppercase">
            address:
          </lable>
          <input
            id="address"
            type="text"
            className="form-control m-2 rounded-1"
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-dark ps-5 pe-5 m-2"
            style={{ display: "inline" }}
          >
            Place order
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default CheckoutDetai;
