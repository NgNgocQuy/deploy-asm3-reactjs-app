import React from "react";

const PageTitle = (props) => {
  return (
    <div style={{ backgroundColor: "#f1f3f5" }} className="container p-5 mb-5">
      <div className=" d-flex flex-row justify-content-between align-items-center fst-italic fs-light text-uppercase p-5">
        <h1>{props.page}</h1>
        <h5 style={{ opacity: ".5" }}>{props.page}</h5>
      </div>
    </div>
  );
};

export default PageTitle;
