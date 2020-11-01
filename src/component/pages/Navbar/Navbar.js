import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  const path = props.location.pathname;

  return (
    <>
      <div id="navbar">
        <div className="container">
          <div className="header_top">
            <div className="logo_area">
              <Link className={path === "/" ? "ListActive" : ""} to="/">
                <span className="logo">Logo</span>
              </Link>
            </div>

            <ul>
              <li>
                <Link className={path === "/" ? "ListActive" : ""} to="/">
                  Home <span></span>
                </Link>
              </li>
              <li>
                <Link
                  className={path === "/aboutUs" ? "ListActive" : ""}
                  to="/aboutUs"
                >
                  About Us <span></span>
                </Link>
              </li>
              <li>
                <Link
                  className={path === "/tutors" ? "ListActive" : ""}
                  to="/tutors"
                >
                  Tutors <span></span>
                </Link>
              </li>
              <li>
                <Link
                  className={path === "/programms" ? "ListActive" : ""}
                  to="/programms"
                >
                  Programms <span></span>
                </Link>
              </li>
              <li>
                <Link
                  className={path === "/contactUs" ? "ListActive" : ""}
                  to="/contactUs"
                >
                  Contact Us <span></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Navbar);
