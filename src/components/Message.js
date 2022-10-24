import React from "react";
import classes from "./Message.module.css";
import PropTypes from "prop-types";
import * as Icon from "iconsax-react";

const Message = (props) => {
  const user = sessionStorage.getItem("name");
  return (
    <div className={classes["msg"] +
    " justify-self-center " +
    classes["right"] +
    " " +
    classes["half-width"]}>
      <div
        className={
          classes["bubble"]
        }
      >
        <span className={classes["text-span"]}>
          {props.message}
        </span>
      </div>
      <Icon.UserOctagon size="40" style={{ color: "green", marginLeft: '10' }} />

    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
