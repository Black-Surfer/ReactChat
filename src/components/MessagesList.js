import React from "react";
import classes from "./MessagesList.module.css";
import PropTypes from "prop-types";
import Message from "./Message";
import OtherMessages from "./OtherMessages";

const MessagesList = ({ messages }) => {
  const user = sessionStorage.getItem("name");

  return (
    <section id="messages-list">
      <p className="text-center h4">My Group</p>
      <div className="d-flex flex-column">
        {messages.map((message) =>
          message.author == user ? (
            <Message key={message.id} {...message} />
          ) : (
            <OtherMessages key={message.id} {...message} />
          )
        )}
      </div>
    </section>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MessagesList;
