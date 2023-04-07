import { createSlice } from "@reduxjs/toolkit";

const initialMessage = {
  showChatbox: false,
  animation: false,
  message: [
    { type: "actor", username: "Admin", message: "hi" },
    { type: "user", message: "hi" },
    { type: "actor", username: "Admin", message: "i can help you" },
    { type: "user", message: "hmmm...." },
  ],
};
const messageSlide = createSlice({
  name: "productList",
  initialState: initialMessage,
  reducers: {
    togglePopup(state) {
      state.showChatbox = !state.showChatbox;
    },
    setAnimation(state) {
      state.animation = !state.animation;
    },
    addMessage(state, action) {
      state.message.push({
        type: action.payload.type,
        message: action.payload.message,
      });
    },
    // togglePopup(state, action) {
    //   if (state.popupDetai.firstAnimation === false) {
    //     state.popupDetai.firstAnimation = true;
    //   }
    //   state.popupDetai.status = !state.popupDetai.status;
    //   // popup detail animation
    //   if (state.popupDetai.status === true) {
    //     // if status = show
    //     // turn off animation close
    //     state.popupDetai.closeAnimation = false;
    //   }
    // },
    // setAnimationClose(state) {
    //   // before coundown state end. turn close animation
    //   state.popupDetai.closeAnimation = true;
    // },
    // setPopupDetail(state, action) {
    //   console.log("action: toggleModalSlide", action);
    //   state.popupDetai.productSelected = action.payload;
    // },
  },
});

export const messageActions = messageSlide.actions;
export default messageSlide.reducer;
