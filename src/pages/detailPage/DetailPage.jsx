import React, { Fragment } from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import { useSelector } from "react-redux";
import Product from "../../components/layout/Product";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  const loaded = useSelector((state) => state.productList.loaded);
  return (
    <Fragment>
      <NavBar shop={true}></NavBar>
      {/* <PageTitle page={"Detail"}></PageTitle> */}
      {loaded && <Product productId={params.productId}></Product>}
      <Footer></Footer>
    </Fragment>
  );
};

export default DetailPage;
