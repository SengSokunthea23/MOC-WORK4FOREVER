import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function HeaderPage() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light text-white"
      style={{ background: "#3D3D3D" }}
    >
      <div className="container-fluid my-1">
        <div className="header-left-content mx-5">
          <img src="Australian Government" className="header-bg-red" alt="..." />
          <a className="navbar-brand text-white ms-3" href="#">
            <span>Free Trade Agreement Portal</span>
          </a>
        </div>
        <FontAwesomeIcon icon={faBars} className="btn btn-lg me-4 bg-white" />
        {/* <FaBars className="btn btn-lg me-4 bg-white" /> */}
      </div>
    </nav>
  );
};
export default HeaderPage;