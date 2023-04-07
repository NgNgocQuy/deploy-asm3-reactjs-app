import { createSlice } from "@reduxjs/toolkit";

const initialToggleModal = {
  popupDetai: {
    firstAnimation: false,
    closeAnimation: false,
    status: false,
    productSelected: "",
  },
  popupMessage: {
    status: false,
    animation: false,
    firstAnimation: false,
  },
};
const toggleModalSlide = createSlice({
  name: "productList",
  initialState: initialToggleModal,
  reducers: {
    togglePopup(state, action) {
      if (action.payload.type === "DETAIL") {
        if (state.popupDetai.firstAnimation === false) {
          state.popupDetai.firstAnimation = true;
        }
        state.popupDetai.status = !state.popupDetai.status;

        // popup detail animation
        if (state.popupDetai.status === true) {
          // if status = show
          // turn off animation close
          state.popupDetai.closeAnimation = false;
        }
      }
      if (action.payload.type === "MESSAGE") {
        if (state.popupMessage.animation === false) {
          state.popupMessage.firstAnimation = true;
        }
        state.popupMessage.status = !state.popupMessage.status;

        // popup detail animation
        if (state.popupMessage.status === true) {
          // if status = show
          // turn off animation close
          state.popupMessage.animation = false;
        }
      }
    },
    setAnimationClose(state, action) {
      // before coundown state end. turn close animation
      if (action.payload.type === "DETAIL") {
        state.popupDetai.closeAnimation = true;
      }
      if (action.payload.type === "MESSAGE") {
        state.popupMessage.animation = true;
      }
    },
    setPopupDetail(state, action) {
      // if (action.payload.type === "DETAIL") {
      console.log("action: toggleModalSlide", action);
      state.popupDetai.productSelected = action.payload;
    },
    // },
  },
});

export const toggleModalActions = toggleModalSlide.actions;
export default toggleModalSlide.reducer;
