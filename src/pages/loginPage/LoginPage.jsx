import React, { Fragment, useEffect } from "react";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import Login from "../../components/user/Login";
import { useDispatch } from "react-redux";
import { userActions } from "../../stores/user";
import { useParams } from "react-router-dom";
const LoginPage = () => {
  const param = useParams();
  console.log(param);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.resetErrorMessage());
  }, []);
  return (
    <Fragment>
      <NavBar home={true}></NavBar>
      <Login></Login>

      <Footer></Footer>
      {/* {<LoadProductAPI />} */}
    </Fragment>
  );
};

export default LoginPage;
