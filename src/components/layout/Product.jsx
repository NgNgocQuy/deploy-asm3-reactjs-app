import React from "react";
import PageTitle from "../UI/PageTitle";
import ProductDetail from "../product/productDetail/ProductDetail";
import ProductRecommendedList from "../product/productRecommended/ProductRecommendedList";
// const ProductRecommendedList = React.lazy(() => {import('../product/productRecommended/ProductRecommendedList')});
// const ProductDetail = React.lazy(() => {import("../product/productDetail/ProductDetail")});

const Product = (props) => {
  return (
    <div className="container pt-2 mt-2 mb-5" style={{ minHeight: "70vh" }}>
      <PageTitle page={"Detail"}></PageTitle>
      <ProductDetail productId={props.productId}></ProductDetail>
      <ProductRecommendedList
        store={`productList`}
        productId={props.productId}
      ></ProductRecommendedList>
    </div>
  );
};
export default Product;
