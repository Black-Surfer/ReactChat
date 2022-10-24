import React, { useState } from "react";
import PropTypes from "prop-types";
import { MDBInput } from "mdb-react-ui-kit";
const AddMessage = (props) => {
  const [message, setMessage] = useState("");
  const user = sessionStorage.getItem("name");
  let input;

  function handleInputChange(event) {
    // debugger;
    const target = event.target;
    const value = target.value;
    setMessage(value);
  }

  return (
    <section id="new-message" className="bg-white">
      <MDBInput
        label="New Message"
        name="message"
        placeholder="Input a message"
        onChange={handleInputChange}
        onKeyUp={(e) => {
          if (e.key == "Enter" && message != "") {
            props.dispatch(message, user);
            setMessage("");
          }
        }}
        type="text"
        value={message}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
