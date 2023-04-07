import React, { useEffect, useRef } from "react";
import classes from "./User.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../stores/user";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.user.login);
  const loginMessage = useSelector((state) => state.user.loginMessage);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const onLogin = (event) => {
    event.preventDefault();
    dispatch(
      userActions.login({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };
  useEffect(() => {
    if (login === true) {
      return navigate("/");
    }
  }, [login]);
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
          onSubmit={onLogin}
        >
          <h1 className="text-secondary text-center p-4 mt-5 mb-5  fst-italic fw-normal text-capitalize">
            Sign in
          </h1>
          <input
            ref={usernameRef}
            type="text"
            className={` form-control border-bottom-0 rounded-0 p-4 ${classes.__focus}`}
            placeholder="Email"
          />
          <input
            ref={passwordRef}
            type="text"
            className={` form-control rounded-0 p-4 ${classes.__focus}`}
            placeholder="Password"
          />
          {loginMessage.status && (
            <p className="text-danger fst-italic">{loginMessage.message}</p>
          )}
          <button
            type="submit"
            className="btn btn-secondary text-uppercase w-100  rounded-0 p-3 mt-3"
          >
            sign in
          </button>

          <p
            style={{ opacity: ".7" }}
            className="text-secondary text-center p-5  fst-italic fw-normal text-capitalize "
          >
            Create an account? &nbsp;
            <Link to={"/register"}>
              <i>Sign up</i>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
