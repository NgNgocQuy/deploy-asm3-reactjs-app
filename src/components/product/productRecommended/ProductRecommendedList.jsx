import React from "react";
import ProducList from "../producList/ProductList";
import { useSelector } from "react-redux";

const ProductRecommendedList = (props) => {
  const productList = useSelector((state) => state.productList.item);
  const product = productList.filter((e) => e._id["$oid"] === props.productId);
  return (
    <div className="container pt-4 p-0">
      <h4 className=" text-uppercase fst-italic"> Related Product</h4>
      <div className="ps-2">
        <ProducList
          store={`productList`}
          sizeCol={3}
          category={product[0].category}
          idSkipProduct={product[0]._id[`$oid`]}
        ></ProducList>
      </div>
    </div>
  );
};

export default ProductRecommendedList;
