import { createSlice } from "@reduxjs/toolkit";

const selected = { img: false };
const selectedSlide = createSlice({
  name: "productList",
  initialState: selected,
  reducers: {},
});

export const selectedActions = selectedSlide.actions;
export default selectedSlide.reducer;
