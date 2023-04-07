import React, { Fragment } from "react";
import NavBar from "../../components/layout/NavBar";
import { useSelector } from "react-redux";
import PageTitle from "../../components/UI/PageTitle";
import ContentGrid from "../../components/layout/ShopContent";
import CategoriesNavAside from "../../components/categories/categoriesNavAside/CategoriesNavAside";
import ProducList from "../../components/product/producList/ProductList";
import ShopContent from "../../components/layout/ShopContent";
import OtherInfomation from "../../components/otherInfomation/OtherInfomation";
import Footer from "../../components/layout/Footer";
const ShopPage = () => {
  console.log(useSelector((state) => state.productList));
  return (
    <Fragment>
      <NavBar shop={true}></NavBar>
      <PageTitle page={"shop"}></PageTitle>
      <ShopContent></ShopContent>
      <OtherInfomation></OtherInfomation>
      <Footer></Footer>
    </Fragment>
  );
};

export default ShopPage;
