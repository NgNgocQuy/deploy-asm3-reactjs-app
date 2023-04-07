import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  arr: "ARRAY_CART",
  user: { username: "" },
  product: [],
  sumAmount: 0,
  sumTotal: 0,
};
const findInProductList = (keyID, list) => {
  let newFind = [];
  list.map((e, i) => {
    if (e.productID === keyID) {
      newFind.push({ ...e, index: i });
    }
  });
  return newFind.length !== 0 ? newFind[0] : false;
};
const createProduct = (action) => {
  return {
    productID: action.payload.productID,
    productDetail: action.payload.productDetail,
    amount: action.payload.amount,
    total: action.payload.productDetail.price * action.payload.amount,
  };
};
const changeProduct = (type, index, amount, list) => {
  if (type === "ADD") {
    list[index].amount += amount;
    list[index].total = list[index].amount * list[index].productDetail.price;
  }
  if (type === "REMOVE") {
    list = list.filter((e, i) => i !== index);
  }
  return list;
};
const changeStepAmountProduct = (type, index, list) => {
  if (type === "INCREASE") {
    list[index].amount += 1;
    list[index].total = list[index].amount * list[index].productDetail.price;
  }
  if (type === "DECREASE") {
    if (list[index].amount === 1) {
      list[index].amount = 0;
      list[index].total = 0;
    }
    if (list[index].amount > 1) {
      list[index].amount -= 1;
      list[index].total = list[index].amount * list[index].productDetail.price;
    }
  }
  return list;
};
const calcSumTotal = (list) => {
  return list.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  );
};
const calcsumAmount = (list) => {
  return list.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );
};
// -----------------
function checkValueLocalStorage(params) {
  //
  return params !== "" && params !== null && params !== undefined
    ? true
    : false;
}
function loadLocalStorage(LocalName) {
  let ValueLocalStorage = localStorage.getItem(`${LocalName}`);
  if (checkValueLocalStorage(ValueLocalStorage)) {
    return (
      JSON.parse(ValueLocalStorage).length !== 0 &&
      JSON.parse(ValueLocalStorage)
    );
  }
  return false;
}
function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("Storage.js: saved ", key, " ; ", value);
    return true;
  } catch (error) {
    return false;
  }
}
const saveCartToLocalStoreage = (key, username, cartList) => {
  let arrCart = loadLocalStorage("ARRAY_CART");
  if (arrCart !== false) {
    if (arrCart.filter((e) => e.username === username).length !== 0) {
      arrCart = arrCart.map((e) => {
        if (e.username === username) {
          e.product = cartList;
        }
        return e;
      });
    } else arrCart.push({ username: username, product: cartList });
  } else {
    arrCart = [];
    arrCart.push({ username: username, product: cartList });
  }
  saveToStorage(key, arrCart);
};
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
const cartSlide = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    clearCart(state) {
      state.arr = "ARRAY_CART";
      state.user.username = "";
      state.product = [];
      state.sumAmount = 0;
      state.sumTotal = 0;
    },
    loadUserCart(state, action) {
      console.log("setUserCart", action);
      if (state.user.username === "" || state.user.username === false) {
        state.user.username = action.payload;
        console.log(state.user.username);
        //
        const arrCart = loadLocalStorage(state.arr);
        console.log("arrCart", arrCart);
        if (arrCart !== false) {
          const cartList = arrCart.filter(
            (e) => e.username === state.user.username
          );
          console.log("cartList", cartList);
          if (cartList.length !== 0) {
            state.product = cartList[0].product;
          }
        }
      }
      console.log(
        "cart state : ",
        state.arr,
        state.user.username,
        state.product[0]
      );
      state.sumTotal = calcSumTotal(state.product);
      state.sumAmount = calcsumAmount(state.product);
    },
    // setUserCart(state, action) {

    // },
    addProductToCart(state, action) {
      // action.playload: productID,productDetail , amount , price
      //   console.log("store/cart- addProductToCart", action);

      const product = findInProductList(
        action.payload.productID,
        state.product
      );
      //   console.log("find inproduclist", product);

      if (product === false) {
        state.product.push(createProduct(action));
      } else {
        state.product = changeProduct(
          "ADD",
          product.index,
          action.payload.amount,
          state.product
        );
      }
      // -------------------------

      state.sumTotal = calcSumTotal(state.product);
      state.sumAmount = calcsumAmount(state.product);
      saveCartToLocalStoreage(state.arr, state.user.username, state.product);
    },

    updateStepAmountProductCart(state, action) {
      const product = findInProductList(
        action.payload.productID,
        state.product
      );
      //   console.log("find inproduclist", product);
      if (product !== false) {
        changeStepAmountProduct(
          action.payload.type,
          product.index,
          state.product
        );
      } else {
        console.log("not found", action.payload.productID);
      }

      state.sumTotal = calcSumTotal(state.product);
      state.sumAmount = calcsumAmount(state.product);
      saveCartToLocalStoreage(state.arr, state.user.username, state.product);
    },
    removeProduct(state, action) {
      const product = findInProductList(
        action.payload.productID,
        state.product
      );
      //   console.log("find inproduclist", product);
      if (product !== false) {
        state.product = changeProduct(
          "REMOVE",
          product.index,
          0,
          state.product
        );
      } else {
        console.log("not found", action.payload.productID);
      }
      state.sumTotal = calcSumTotal(state.product);
      state.sumAmount = calcsumAmount(state.product);
      saveCartToLocalStoreage(state.arr, state.user.username, state.product);
    },
    // -------------------------
    createCheckout(state, action) {},
  },
});

export const cartActions = cartSlide.actions;
export default cartSlide.reducer;
