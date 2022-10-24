import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBInput,
} from "mdb-react-ui-kit";

const NameModal = (props) => {
  const [optSmModal, setOptSmModal] = useState(
    sessionStorage.getItem("name") ? false : true
  );
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const toggleShow = () => setOptSmModal(!optSmModal);

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    setName(value);
  }

  const handleSubmit = (e) => {
    if (name == "") {
      setError("Please enter your name");
    } else {
      //save to session/state.
      var isExisting = false;

      for (var i = 0; i < props.users.length; i++) {
        if (name.toLowerCase() == props.users[i].name.toLowerCase()) {
          isExisting = true;
        }
      }
      if (!isExisting) {
        props.dispatch(name);
      }
      sessionStorage.setItem("name", name);
      window.location.href = "/";

      toggleShow();
    }
  };

  return (
    <>
      <MDBModal staticBackdrop show={optSmModal} tabIndex="-1" setShow={setOptSmModal}>
        <MDBModalDialog size="sm">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>ENTER NAME</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                type="text"
                label="Name"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter Name"
              />
              <p className="text-danger">{error !== "" && error}</p>
              <MDBBtn
                className="btn mt-3 text-center"
                color="success"
                onClick={handleSubmit}
              >
                Enter
              </MDBBtn>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

NameModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default NameModal;
