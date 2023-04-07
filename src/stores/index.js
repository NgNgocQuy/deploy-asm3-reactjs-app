import { configureStore } from "@reduxjs/toolkit";

import productList from "./productList";
import toggleModal from "./toggleModal";
import cart from "./cart";
import selected from "./selected";
import user from "./user";
import message from "./message";
const store = configureStore({
  reducer: {
    productList: productList,
    cart: cart,
    selected: selected,
    user: user,
    message: message,
    toggleModal: toggleModal,
  },
});

export default store;
