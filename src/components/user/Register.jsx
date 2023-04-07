import React, { useRef } from "react";
import classes from "./User.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../stores/user";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const err = useSelector((state) => state.user.registerMessage);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const fullnameRef = useRef();
  const phoneRef = useRef();

  const registerHandler = (event) => {
    event.preventDefault();
    console.log();
    // if (
    // validateEmail(usernameRef.current.value) &&
    // fullnameRef.current.value.length > 5 &&
    // phoneRef.current.value >= 9
    // ) {
    dispatch(
      userActions.register({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        fullname: fullnameRef.current.value,
        phone: phoneRef.current.value,
      })
    );
    // }

    return navigate("/");
  };

  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };

  return (
    <div
      style={{ backgroundImage: `url("./image/banner1.jpg")` }}
      className={`${classes[`__bg-image`]} p-4`}
    >
      <div className="container d-flex justify-content-center pt-5 pb-5">
        <form
          action="post"
          className=" form-control shadow bg-body rounded-3 border-0 ps-5 pe-5"
          style={{
            maxWidth: "34rem",
          }}
          onSubmit={registerHandler}
        >
          <h1 className="text-secondary text-center p-4 mt-5 mb-5  fst-italic fw-normal text-capitalize">
            sign up
          </h1>
          <input
            ref={fullnameRef}
            type="text"
            className={` form-control border-bottom-0 rounded-0 p-4 `}
            placeholder="Full Name"
          />
          <input
            ref={usernameRef}
            type="text"
            className={` form-control border-bottom-0 rounded-0 p-4 `}
            placeholder="Email"
          />
          <input
            ref={phoneRef}
            type="text"
            className={` form-control border-bottom-0 rounded-0 p-4`}
            placeholder="Phone"
          />
          <input
            ref={passwordRef}
            type="password"
            className={` form-control rounded-0 p-4 `}
            placeholder="Password"
          />
          <button
            type="submit"
            className="btn btn-secondary text-uppercase w-100  rounded-0 p-3 mt-3"
          >
            sign up
          </button>

          <p
            style={{ opacity: ".7" }}
            className="text-secondary text-center p-5  fst-italic fw-normal text-capitalize "
          >
            You have account? &nbsp;
            <Link to={"/login"}>
              <i>Sign in</i>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
