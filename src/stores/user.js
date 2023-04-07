import { createSlice } from "@reduxjs/toolkit";

const user = {
  //   USER_ARRAY: [],
  current: "CURRENT_USER",
  arr: "USER_ARRAY",
  CURRENT_USER: { username: ``, fullname: "", phone: "" },
  login: false,
  loginMessage: {
    status: false,
    message: `username hoac password khong chinh xac`,
  },
  registerMessage: { status: false, message: `username da ton tai` },
};
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
  } else return false;
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
function findLoginUser(username, password, arrUser) {
  console.log("findLoginUser : ", arrUser);
  let currentUser = [];
  arrUser.map((e) => {
    if (e.username === username && e.password === password) {
      console.log(e);
      currentUser.push(e);
    }
  });
  console.log(currentUser);
  return currentUser.length === 1 ? currentUser[0] : false;
}
function findUser(username, arrUser) {
  let currentUser = arrUser.filter((e) => e.username === username);
  return currentUser.length === 1 ? currentUser : false;
}
// ______________________________________________________
// ______________________________________________________
const userSlide = createSlice({
  name: "productList",
  initialState: user,
  reducers: {
    // ------------------
    resetErrorMessage(state) {
      state.loginMessage.status = false;
      state.registerMessage.status = false;
    },
    // ------------------
    currentUserLocalStorage(state) {
      const currentUser = loadLocalStorage(state.current);
      console.log("on check login currentUser : ", currentUser);

      if (currentUser !== false) {
        console.log("on check login currentUser : ", currentUser);
        state.CURRENT_USER = {
          username: currentUser.username,
          fullname: currentUser.fullname,
          phone: currentUser.phone,
        };
        state.login = true;
      }
    },
    login(state, action) {
      const arrUser = loadLocalStorage(state.arr);
      console.log(arrUser);
      if (arrUser !== false && arrUser.length !== 0) {
        const currentUser = findLoginUser(
          action.payload.username,
          action.payload.password,
          arrUser
        );
        if (currentUser !== false) {
          console.log("state.CURRENT_USER", state.CURRENT_USER);
          if (saveToStorage(state.current, currentUser) === true) {
            console.log("CURRENT_USER save data sucsess");
            state.CURRENT_USER = {
              username: currentUser.username,
              fullname: currentUser.fullname,
              phone: currentUser.phone,
            };
            state.login = true;
          } else {
            console.log("CURRENT_USER save data false");
          }
        } else {
          console.log("user not found");
          state.loginMessage.status = true;
        }
      } else {
        console.log("arr user not found");
        state.loginMessage.status = true;
      }
    },
    register(state, action) {
      console.log(action);
      let arrUser = loadLocalStorage(state.arr);
      let currentUser;
      if (arrUser !== false) {
        // arr co user
        console.log("array user co data");
        currentUser = findUser(action.payload.username, arrUser);
      } else {
        console.log("array user rong");
        arrUser = [];
        currentUser = false;
      }
      if (currentUser === false) {
        arrUser.push({
          username: action.payload.username,
          password: action.payload.password,
          fullname: action.payload.fullname,
          phone: action.payload.phone,
        });
        if (saveToStorage(state.arr, arrUser)) {
          state.CURRENT_USER = {
            username: action.payload.username,
            fullname: action.payload.fullname,
            phone: action.payload.phone,
          };
          state.login = true;
        } else {
          console.log("save fale");
        }
      } else {
        console.log("user daton tai");
        state.registerMessage.status = true;
      }
    },
    logout(state) {
      state.CURRENT_USER.username = "";
      state.CURRENT_USER.fullname = "";
      state.CURRENT_USER.phone = "";
      state.login = false;
      saveToStorage(state.current, "");
    },
  },
});

export const userActions = userSlide.actions;
export default userSlide.reducer;
