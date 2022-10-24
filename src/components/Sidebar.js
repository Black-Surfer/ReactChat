import React from "react";
import PropTypes from "prop-types";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import * as Icon from "iconsax-react";
const loggedUser = sessionStorage.getItem("name");

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <p className="text-center h4">List of users</p>
    <MDBListGroup style={{ minWidth: "22rem" }} light>
      {users.map((user) => (
        <MDBListGroupItem
          key={user.id}
          tag="a"
          href="#"
          action
          noBorders
          active={loggedUser == user.name ? true : false}
          aria-current="true"
          className="px-3"
        >
          <Icon.UserSquare
            size="30"
            style={{ color: "green" }}
            className="me-2"
          />
          {user.name} {loggedUser == user.name && '(Active)'}
        </MDBListGroupItem>
      ))}
    </MDBListGroup>
  </aside>
);

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Sidebar;
