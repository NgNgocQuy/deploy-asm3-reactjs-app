import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalActions } from "../../../stores/toggleModal";
import ProductCard from "../productCard/ProductCard";
import ProductPopupDetail from "../producPopup/ProductPopupDetail";
const ProducList = (props) => {
  let productList = useSelector((state) => state[`${props.store}`].item);
  // }
  // if (props.queryData === "search") {
  //   productList = useSelector((state) => state.productList.item);
  // }
  if (props.category) {
    productList = productList.filter((e) => e.category === props.category);
    if (props.idSkipProduct) {
      productList = productList.filter(
        (e) => e._id["$oid"] !== props.idSkipProduct
      );
    }
  }
  return (
    <Fragment>
      <div className="row fw-light fst-italic position-relative">
        {productList.map((e) => (
          <ProductCard
            key={e._id[`$oid`]}
            product={e}
            sizeCol={props.sizeCol}
          ></ProductCard>
        ))}
      </div>
      <ProductPopupDetail />
    </Fragment>
  );
};

export default ProducList;
