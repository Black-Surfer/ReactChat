import React from "react";
import classes from "./OtherMessages.module.css";
import PropTypes from "prop-types";
import * as Icon from "iconsax-react";

const OtherMessages = (props) => {
  return (
    <div
      className={
        classes["msg"] + " " + classes["right"] + " " + classes["half-width"]
      }
    >
      <Icon.UserSquare size="40" style={{ color: "green"}} />
      <span className={classes["bubble"]}>
        <span className={classes["text-span"]}><b>{props.author}</b>: {props.message}</span>
      </span>
    </div>
  );
};

OtherMessages.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default OtherMessages;
