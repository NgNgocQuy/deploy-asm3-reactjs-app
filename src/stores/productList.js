import { createSlice } from "@reduxjs/toolkit";

const initialProductList = { loaded: false, amount: 0, item: [] };
const productListSlide = createSlice({
  name: "productList",
  initialState: initialProductList,
  reducers: {
    addProductItem(state, action) {
      action.payload.map((productItem) => {
        state.item.push(productItem);
      });
      state.amount = action.payload.length;
    },
    setLoaded(state, action) {
      state.loaded = action.payload;
    },
    setAmount(state, action) {
      state.amount = action.payload.amount;
    },
  },
});

export const productListActions = productListSlide.actions;
export default productListSlide.reducer;
