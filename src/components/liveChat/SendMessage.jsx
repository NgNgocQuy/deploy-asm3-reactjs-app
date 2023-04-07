import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { messageActions } from "../../stores/message";
const SendMessage = () => {
  const dispatch = useDispatch();
  const messageRef = useRef();
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (messageRef.current.value !== "") {
      dispatch(
        messageActions.addMessage({
          type: "user",
          message: messageRef.current.value,
        })
      );
    }
  };
  return (
    <Fragment>
      <form
        onSubmit={SubmitHandler}
        action=""
        className="d-flex flex-row align-items-center p-2"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div>
          <i className="fas fa-user-circle me-3 fs-lg"></i>
        </div>
        <input
          ref={messageRef}
          type="text"
          className="form-control border-0"
          placeholder="Enter message"
        />

        <button className="btn btn-default">
          <i
            className="fas fa-paperclip fs-lg"
            style={{ color: "#adb5bd" }}
          ></i>
        </button>
        <button className="btn btn-default">
          <i className="fas fa-smile fs-lg" style={{ color: "#adb5bd" }}></i>
        </button>
        <button type="submit" className="btn btn-default">
          <i className="fas fa-paper-plane" style={{ color: "#228be6" }}></i>
        </button>
      </form>
    </Fragment>
  );
};

export default SendMessage;
