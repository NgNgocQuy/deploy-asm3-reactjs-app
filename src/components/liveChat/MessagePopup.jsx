import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./MessagePopup.module.css";
import { useSelector } from "react-redux";
import SendMessage from "./SendMessage";
const MessagePopup = () => {
  const chatbox = useSelector((state) => state.toggleModal.popupMessage.status);
  const animation = useSelector(
    (state) => state.toggleModal.popupMessage.animation
  );
  const message = useSelector((state) => state.message.message);
  return (
    <Fragment>
      {chatbox && (
        <div className="position-absolute bottom-0 end-0 m-5">
          <div
            className={`${
              classes[!animation ? `__popup-appear` : `__popup-disppear`]
            } border bg-body me-5 mb-5 d-flex flex-column justify-content-between p-2`}
          >
            {/* <div className=""> */}
            <div className="d-flex flex-wrap  justify-content-between border-bottom align-items-center m-2 p-2">
              <span className="fs-5 fw-bold">Customer Suppot</span>
              <button className="btn btn-light">
                <i>Les't Chat App</i>
              </button>
            </div>
            <div className="align-self-stretch overflow-auto w-100 d-flex flex-column justify-content-start gap-3 ps-3 pe-3">
              {message.map((e, i) =>
                e.type === "actor" ? (
                  <div key={i} className="">
                    <i className="fas fa-user-circle me-3 fs-lg"></i>

                    <i className="rounded-2 align-self-start bg-light p-2">
                      {e.username}:&nbsp;{e.message}
                    </i>
                  </div>
                ) : (
                  // <div key={i} className="">
                  <i
                    key={i}
                    className="rounded-2 align-self-end bg-primary text-light p-2 ps-3 pe-3"
                  >
                    {e.message}
                  </i>
                  // </div>
                )
              )}
            </div>
            <SendMessage></SendMessage>
            {/* </div> */}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MessagePopup;
