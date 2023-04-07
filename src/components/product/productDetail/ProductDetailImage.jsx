import React, { Fragment, useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import { useSelector } from "react-redux";

const ProductDetailImage = (props) => {
  const [styles, setStyles] = useState("__appear-image");
  const [imageSelected, setImgaeSelected] = useState(props.img1);
  //   change image selected
  const setImage = (event) => {
    setImgaeSelected(event.target.src);
    setStyles("__appear-image");
  };
  const imageSelecedElement = (
    <div className={`${classes[styles]} col-10 `}>
      <img src={imageSelected} alt="" className={`w-100  object-fit-over`} />
    </div>
  );
  useEffect(() => {
    setImgaeSelected(props.img1);
  }, [props.img1]);
  return (
    <Fragment>
      <div className="d-flex flex-column gap-3 col-2 pt-4">
        <img
          src={props.img1}
          onClick={setImage}
          style={{
            backgroundColor: imageSelected === props.img1 && "#ced4da",
          }}
          alt=""
          className="object-fit-over p-2"
        />
        <img
          src={props.img2}
          onClick={setImage}
          style={{
            backgroundColor: imageSelected === props.img2 && "#ced4da",
          }}
          alt=""
          className="object-fit-over p-2"
        />
        <img
          src={props.img3}
          onClick={setImage}
          style={{
            backgroundColor: imageSelected === props.img3 && "#ced4da",
          }}
          alt=""
          className="object-fit-over p-2"
        />
        <img
          src={props.img4}
          onClick={setImage}
          style={{
            backgroundColor: imageSelected === props.img4 && "#ced4da",
          }}
          alt=""
          className="object-fit-over p-2"
        />
      </div>
      {imageSelecedElement}
    </Fragment>
  );
};

export default ProductDetailImage;
