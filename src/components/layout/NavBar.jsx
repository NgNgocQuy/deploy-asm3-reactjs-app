import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../stores/user";
import { cartActions } from "../../stores/cart";

const NavBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.CURRENT_USER);
  const login = useSelector((state) => state.user.login);
  const cartAmount = useSelector((state) => state.cart.sumAmount);
  useEffect(() => {
    if (login == true) {
      dispatch(cartActions.loadUserCart(user.username));
    }
  }, [login]);
  const onLogout = () => {
    dispatch(userActions.logout());
    dispatch(cartActions.clearCart());
    return navigate("/");
  };
  const onLogin = () => {
    return navigate("/login");
  };
  const navigateCart = () => {
    if (login === true) {
      return navigate("/cart");
    } else {
      return navigate("/login");
    }
  };
  return (
    <div className="container mt-2 mb-2 mb-5">
      <div
        style={{ letterSpacing: "1px" }}
        className=" d-flex flex-row justify-content-between p-1 fw-light fst-italic "
      >
        <div className="d-flex flex-row gap-2 text-capitalize ">
          <Link to={"/"} className="text-decoration-none">
            <h4
              style={{ cursor: "pointer", color: "#343a40" }}
              // onClick={() => {
              //   props.home ? navigate(`/`) : navigate(-1);
              // }}
              className={props.home && "text-warning"}
            >
              home
            </h4>
          </Link>
          <Link to={"/shop"} className="text-decoration-none">
            <h4
              className={props.shop && "text-warning"}
              style={{ cursor: "pointer", color: "#343a40" }}
            >
              shop
            </h4>
          </Link>
        </div>
        <div>
          <h4 className="text-uppercase"> boutique</h4>
        </div>
        <div className="d-flex flex-row gap-2 text-capitalize align-items-center">
          <button
            onClick={navigateCart}
            className={`${
              props.cart && "text-warning"
            } btn btn-default fst-italic position-relative`}
          >
            <h5>
              <i
                className="fas fa-shopping-cart fs-5 fa-xs"
                style={{ color: "#ced4da" }}
              ></i>
              &nbsp;cart
            </h5>
            {login && (
              <div className="position-absolute top-0 end-0 text-warning fw-bold">
                {cartAmount}
              </div>
            )}
          </button>
          <h5>
            <i
              className="fas fa-user fs-5 fa-sm"
              style={{ color: "#ced4da" }}
            ></i>
            &nbsp;{login ? user.fullname : ""}
            <i
              className="fas fa-caret-down fa-xs"
              style={{ color: "#adb5bd" }}
            ></i>
          </h5>
          {!login ? (
            <button
              className="btn btn-default fst-italic p-0"
              onClick={onLogin}
            >
              <h5>{`( login )`}</h5>
            </button>
          ) : (
            <button
              className="btn btn-default fst-italic p-0"
              onClick={onLogout}
            >
              <h5>{`( logout )`}</h5>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
