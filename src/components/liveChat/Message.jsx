import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { toggleModalActions } from "../../stores/toggleModal";
import MessagePopup from "./MessagePopup";
import classes from "./MessagePopup.module.css";
const Message = () => {
  const dispatch = useDispatch();

  // console.log("chatbox", chatbox);
  // const [toggleChatbox,]
  // const [toggleBox, setToggleBox] = useState(false);
  const toggleChatbox = (event) => {
    // console.log(event.target);
    dispatch(toggleModalActions.setAnimationClose({ type: "MESSAGE" }));
    setTimeout(() => {
      dispatch(toggleModalActions.togglePopup({ type: "MESSAGE" }));
    }, 510);
  };

  return (
    <Fragment>
      {createPortal(
        <div className={classes[`__modal`]}>
          <div className={classes[`__content-fixed`]}>
            <MessagePopup></MessagePopup>
            <div className="position-absolute bottom-0 end-0  p-4  ">
              <i
                className="fab fa-facebook-messenger btn btn-default rounded-circle p-2"
                onClick={toggleChatbox}
                style={{
                  color: "#fff",
                  backgroundColor: "#000",
                  fontSize: "3rem",
                  width: "4rem",
                  height: "4rem",
                }}
              ></i>
            </div>
          </div>
        </div>,
        document.getElementById("popup-message")
      )}
    </Fragment>
  );
};

export default Message;
