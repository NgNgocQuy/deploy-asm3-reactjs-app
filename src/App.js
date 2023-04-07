import "./App.css";
import { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
// axios load http request
// import useAxios;
import useAxios from "./hooks/use-https-axios";
import API_URL from "./constants/api-url.json";
import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "./stores/productList";
import { userActions } from "./stores/user";
//
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import DetailPage from "./pages/detailPage/DetailPage";
import CartPage from "./pages/cartPage/CartPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

function App() {
  console.log("render app");
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.productList.loaded);

  const producListData = useAxios(API_URL.url, "GET", null);
  useEffect(() => {
    console.log("producListData", producListData);
    if (producListData.loaded === true && loaded === false) {
      console.log("product loaded.");
      dispatch(userActions.currentUserLocalStorage());
      dispatch(productListActions.addProductItem(producListData.data));
      dispatch(productListActions.setLoaded(true));
    }
  }, [producListData]);
  useEffect(() => {
    dispatch(userActions.currentUserLocalStorage());
    dispatch(userActions.resetErrorMessage());
  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/detail/:productId" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/checkout" element={<CheckoutPage />} />
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
