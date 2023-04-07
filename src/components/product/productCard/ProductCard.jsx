import React from "react";
import classes from "./ProductCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalActions } from "../../../stores/toggleModal";
const ProductCard = (props) => {
  const dispatch = useDispatch();

  const handlerSetPopupDetai = () => {
    dispatch(toggleModalActions.setPopupDetail(props.product));
    dispatch(toggleModalActions.togglePopup({ type: "DETAIL" }));
    // console.log(toggle);
  };

  const formatterVND = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });
  return (
    <div
      className={` ${classes[`__hover-card`]} col-6 ${
        `col-md-` + props.sizeCol
      } card rouded-0 border border-0 p-2`}
    >
      <img
        onClick={handlerSetPopupDetai}
        src={`${props.product.img1}`}
        className={` ${classes[`__appear-image`]} card-img-top rounded-2 mb-1`}
        alt=""
      />
      <div className="card-body d-flex flex-column justify-content-between text-center p-2">
        <h6>{props.product.name}</h6>
        <p style={{ opacity: ".8" }}>
          {formatterVND.format(props.product.price)}
        </p>
      </div>
    </div>
  );
};
const areEqual = (prevProps, nextProps) =>
  prevProps.product._id[`$oid`] === nextProps.product._id[`$oid`];
export default React.memo(ProductCard, areEqual);

// const areEqual = (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringfiy(nextProps);
// export default React.memo(renderedTable, areEqual);
