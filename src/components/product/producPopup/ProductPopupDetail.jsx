import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalActions } from "../../../stores/toggleModal";
import classes from "./ProductPopupDetail.module.css";
import { Link } from "react-router-dom";

const ProductPopupDetail = () => {
  console.log("ProductPopupDetail");
  const dispatch = useDispatch();
  const product = useSelector(
    (state) => state.toggleModal.popupDetai.productSelected
  );
  const status = useSelector((state) => state.toggleModal.popupDetai.status);
  const closeAnimation = useSelector(
    (state) => state.toggleModal.popupDetai.closeAnimation
  );
  const toggleModal = (event) => {
    console.log(event.target);
    //waiting for coundown end
    // before turn animation close
    // after coundown end. toggle status = false
    dispatch(toggleModalActions.setAnimationClose({ type: "DETAIL" }));
    setTimeout(() => {
      dispatch(toggleModalActions.togglePopup({ type: "DETAIL" }));
    }, 510);
  };

  const formatterVND = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      {status &&
        createPortal(
          <div className={classes[`__modal`]}>
            <div
              className={`${
                classes[
                  !closeAnimation ? `__content-fixed` : `__content-fixed-hidden`
                ]
              } `}
            >
              <div
                className={`${
                  classes[
                    !closeAnimation ? `__black-drop` : `__black-drop-hidden`
                  ]
                } `}
                onClick={toggleModal}
              ></div>
              <div
                className={`${
                  classes[
                    !closeAnimation ? `__modalDetail` : `__modalDetail-hidden`
                  ]
                } rounded-3`}
              >
                <div className="container p-0">
                  {/* btn - close */}
                  <div
                    className={classes[`__close-modal`]}
                    onClick={toggleModal}
                  >
                    <i
                      className="fas fa-times fa-lg"
                      style={{ color: "#000000" }}
                    ></i>
                  </div>
                  <div className="row m-3">
                    {/* image */}
                    <div className="col-12 col-md-6 p-0">
                      <img src={product.img1} className="" alt="" />
                    </div>
                    {/* detail */}
                    <div className="col-12 col-md-6 position-relative p-4 pt-5">
                      {/* detail */}
                      <div className=" d-flex flex-column gap-1 fst-italic">
                        <h4>{product.name}</h4>
                        <p style={{ opacity: ".8" }}>
                          {formatterVND.format(product.price)}
                        </p>
                        <p> {product.short_desc} </p>
                        {/* HashLink to={"/page#id"} */}
                        <Link
                          onClick={scrollToTop}
                          to={`/detail/${product._id[`$oid`]}`}
                        >
                          <button
                            onClick={toggleModal}
                            className="btn btn-dark rounded-0"
                          >
                            <i
                              className="fas fa-shopping-cart fs-5 fa-xs"
                              style={{ color: "#ced4da" }}
                            ></i>{" "}
                            view detail
                          </button>
                        </Link>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.getElementById("popup-modal")
        )}
    </Fragment>
  );
};

export default ProductPopupDetail;
