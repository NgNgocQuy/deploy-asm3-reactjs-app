import React, { useState } from "react";
import CategoriesNavAside from "../categories/categoriesNavAside/CategoriesNavAside";
import ProducList from "../product/producList/ProductList";
// const ProducList = React.lazy(() => {import("../product/producList/ProductList")});

const ShopContent = () => {
  const [categoryState, setCategoryState] = useState(false);
  const onSetCategory = (event) => {
    if (event === "all") {
      setCategoryState(false);
    } else {
      setCategoryState(event);
    }
  };
  return (
    <div className="container mt-2 mb-5" style={{ minHeight: "70vh" }}>
      <div className="row">
        <div className="col-3">
          <h4 className="text-uppercase fst-italic fs-light mt-2 mb-2">
            categories
          </h4>
          <CategoriesNavAside setCategory={onSetCategory}></CategoriesNavAside>
        </div>
        <div className="col-9 d-flex flex-column">
          <div className=" d-flex flex-row justify-content-between pt-2 mb-2">
            <form action="" style={{ width: "20rem" }}>
              <input
                className="form-control rounded-0 text-capitalize fst-italic"
                type="text"
                placeholder="Enter search here!"
              />
            </form>
            <div>
              <select className="form-select" style={{ display: "inline" }}>
                <option value="Default sort" defaultChecked>
                  Default sort
                </option>
                <option value=""> sort by name</option>
                <option value="">sort by time</option>
              </select>
            </div>
          </div>
          <div style={{ minHeight: "60vh" }}>
            <ProducList
              sizeCol={4}
              store={`productList`}
              category={categoryState}
            ></ProducList>
          </div>
          <div className=" d-flex flex-row-reverse fs-4 m-5">
            <div className="d-flex align-items-center gap-1">
              <i className="btn btn-default  fs-dark fas fa-angle-double-left fa-sm"></i>
              <i className="btn btn-dark fs-light">1</i>
              <i className="btn btn-default  fs-dark fas fa-angle-double-right fa-sm"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
