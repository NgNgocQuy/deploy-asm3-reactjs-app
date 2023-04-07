import React from "react";
import ProducList from "../product/producList/ProductList";

const Trending = (props) => {
  return (
    <div className="container mt-2 mb-5">
      <div style={{ letterSpacing: ".9px" }} className="text-uppercase mb-4">
        <h6 style={{ opacity: ".5" }}>made the hard way</h6>
        <h4> top trending products </h4>
      </div>
      <ProducList sizeCol={3} store={`productList`}></ProducList>
    </div>
  );
};

export default Trending;
