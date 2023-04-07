import React from "react";

const OtherInfomation = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("subscribed ", event.value);
  };
  return (
    <div className="container fst-italic mt-2 mb-5">
      <div
        className="row text-center pt-5 pb-4 m-0 mb-2"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="col col-md-4 p-2">
          <h5 className="text-uppercase">free shipping</h5>
          <p style={{ opacity: ".6" }}>Free shipping worlwide</p>
        </div>
        <div className="col col-md-4 p-2">
          <h5 className="text-uppercase">24/7 service</h5>
          <p>Free shipping worlwide</p>
        </div>
        <div className="col col-md-4 p-2">
          <h5 className="text-uppercase">festival offer</h5>
          <p>Free shipping worlwide</p>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between pt-4 pb-4">
        <div>
          <h5 className="text-uppercase">let's be friends!</h5>
          <p style={{ opacity: ".6" }}>
            {" "}
            Lorem ipsum dolor sit amet consectetur.{" "}
          </p>
        </div>
        <form
          style={{ width: "38rem" }}
          className="d-flex flex-row "
          action=""
          onSubmit={submitHandler}
        >
          <input
            type="text"
            className="form-control rounded-0 fs-4"
            placeholder="Enter email..."
          />
          <button
            className="btn btn-dark rounded-0 fs-4 ps-5 pe-5"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtherInfomation;
