import React, { Fragment, useEffect } from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import Register from "../../components/user/Register";
import { useDispatch } from "react-redux";
import { userActions } from "../../stores/user";

const RegisterPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.resetErrorMessage());
  }, []);
  return (
    <Fragment>
      <NavBar home={true}></NavBar>
      <Register></Register>

      <Footer></Footer>
      {/* {<LoadProductAPI />} */}
    </Fragment>
  );
};

export default RegisterPage;
