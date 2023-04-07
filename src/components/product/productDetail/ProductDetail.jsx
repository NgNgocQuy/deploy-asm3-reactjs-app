import React from "react";
import ProductDetailImage from "./ProductDetailImage";
import DetaiPrimary from "./DetaiPrimary";
import DetailSecondary from "./DetailSecondary";
import { useSelector } from "react-redux";

const ProductDetail = (props) => {
  const productList = useSelector((state) => state.productList.item);
  const product = productList.filter((e) => {
    return e._id["$oid"] === props.productId;
  });
  return (
    <div className="row">
      <div className="row col-12 col-md-6 p-2">
        <ProductDetailImage {...product[0]}></ProductDetailImage>
      </div>

      <div className="d-flex flex-column gap-3 align-items-start col-12 col-md-6 p-5 fst-italic ">
        <DetaiPrimary {...product[0]}></DetaiPrimary>
      </div>
      <div className="col-12 col-md-8 fst-italic p-2 pt-5">
        <DetailSecondary {...product[0]}></DetailSecondary>
      </div>
    </div>
  );
};

export default ProductDetail;
