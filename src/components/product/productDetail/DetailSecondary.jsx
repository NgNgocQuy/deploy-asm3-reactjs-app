import React, { Fragment, useState } from "react";

const DetailSecondary = (props) => {
  const [showDesc, setShowDesc] = useState(false);

  let long_desc_split = props.long_desc.split(`\n•`);
  const show_Desc = () => {
    setShowDesc(!showDesc);
  };
  return (
    <Fragment>
      <h6
        // style={{ opacity: showDesc && ".8" }}
        onClick={show_Desc}
        className={`btn ${
          showDesc ? "btn-secondary" : "btn-dark"
        } rounded-0 text-uppercase fst-italic fw-light p-2 ps-5 pe-5`}
      >
        description
      </h6>
      <h5 className="text-uppercase  p-2">product description</h5>
      <div style={{ opacity: ".8" }} className={`ps-3`}>
        {/* <h5 className="text-uppercase fw-light">đặc điểm nổi bật</h5> */}
        {long_desc_split.map((e, i) => {
          if (showDesc === false && i < 6) {
            return (
              <p key={i} className=" mb-2">
                - {e}
              </p>
            );
          } else if (showDesc === true) {
            return (
              <p key={i} className=" mb-2">
                - {e}
              </p>
            );
          }
        })}
        {!showDesc && <p>. . .</p>}
      </div>
    </Fragment>
  );
};

export default DetailSecondary;
