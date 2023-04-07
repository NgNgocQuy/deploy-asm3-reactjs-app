import React, { Fragment, useEffect } from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import Checkout from "../../components/layout/Checkout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PageTitle from "../../components/UI/PageTitle";
// import
const CheckoutPage = () => {
  const navigate = useNavigate();
  const login = useSelector((state) => state.user.login);
  useEffect(() => {
    if (login === true) {
    } else {
      return navigate("/login");
    }
  }, []);
  return (
    <Fragment>
      <NavBar></NavBar>
      <PageTitle page={`checkout`}></PageTitle>
      <Checkout></Checkout>
      <Footer></Footer>
    </Fragment>
  );
};

export default CheckoutPage;
