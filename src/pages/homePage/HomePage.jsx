import React from "react";
import { Fragment } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "../../stores/productList";
//
import Banner from "../../components/banner/Banner";
import CategoriesIntroProduct from "../../components/categories/categoriesIntro/CategoriesIntroProduct";
import Footer from "../../components/layout/Footer";
import NavBar from "../../components/layout/NavBar";
// import LoadProductAPI from "../../components/loader/LoadProductAPI";
import OtherInfomation from "../../components/otherInfomation/OtherInfomation";
import Trending from "../../components/layout/Trending";

const HomePage = () => {
  // console.log();
  const loaded = useSelector((state) => state.productList.loaded);
  console.log("loaded", loaded);
  // load data
  return (
    <Fragment>
      <NavBar home={true}></NavBar>

      <Banner></Banner>

      <CategoriesIntroProduct></CategoriesIntroProduct>

      {/* list product */}
      {loaded && <Trending />}
      {/*  */}
      <OtherInfomation></OtherInfomation>
      <Footer></Footer>
      {/* {<LoadProductAPI />} */}
    </Fragment>
  );
};

export default HomePage;
