import React from "react";
import classes from "./CategoriesNavAside.module.css";
const CategoriesNavAside = (props) => {
  const setCategory = (event) => {
    let value = event.target.innerHTML;
    console.log(value);
    props.setCategory(value);
  };
  return (
    <div className={classes[`__category-list`]}>
      <ul>
        <h6 className={classes[`__title`]}>apple</h6>
        <li onClick={setCategory}>all</li>
      </ul>
      <ul className="">
        <h6 className="">iphone & mac</h6>
        <li onClick={setCategory}>iphone</li>
        <li onClick={setCategory}>ipad</li>
        <li onClick={setCategory}>macbook</li>
      </ul>
      <ul>
        <h6>wireless</h6>
        <li onClick={setCategory}>aipod</li>
        <li onClick={setCategory}>watch</li>
      </ul>
      <ul>
        <h6>other</h6>
        <li onClick={setCategory}>mouse</li>
        <li onClick={setCategory}>keyboard</li>
        <li onClick={setCategory}>other</li>
      </ul>
    </div>
  );
};

export default CategoriesNavAside;
