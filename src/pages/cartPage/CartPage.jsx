import React, { useEffect } from "react";
import NavBar from "../../components/layout/NavBar";
import PageTitle from "../../components/UI/PageTitle";
import Footer from "../../components/layout/Footer";
import CartContaner from "../../components/layout/Cart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const login = useSelector((state) => state.user.login);
  useEffect(() => {
    if (login === true) {
    } else {
      return navigate("/login");
    }
  }, []);
  return (
    <div>
      <NavBar cart={true}></NavBar>
      <PageTitle page={"cart"}></PageTitle>
      <CartContaner></CartContaner>
      <Footer></Footer>
    </div>
  );
};

export default CartPage;
