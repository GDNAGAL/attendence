import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.css";
export default function Navbar() {
  return (
    <div className="cnavbar">
      <nav
        className="navbar navbar-default navbar-cls-top "
        role="navigation"
        style={{ marginBottom: 0 }}
      >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".sidebar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            iWeb Wiser
          </Link>
        </div>
        <div
          style={{
            color: "white",
            padding: "15px 50px 5px 50px",
            float: "right",
            fontSize: "16px",
          }}
        >
          {" "}
          Last access : 30 May 2014 &nbsp;{" "}
          <a href="#" className="btn btn-danger square-btn-adjust">
            Logout
          </a>{" "}
        </div>
      </nav>
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2960/2960006.png"
                alt="not loded"
                className="user-image img-responsive"
              />
            </li>

            <li>
              <Link to="/">
                <i className="fa fa-dashboard fa-2x"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link to="emp">
                <i className="fa fa-users fa-2x"></i> Employees
              </Link>
            </li>
            <li>
              <Link to="/attendence">
                <i className="fa fa-edit fa-2x"></i> Attendence
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-qrcode fa-2x"></i> Tabs & Panels
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-bar-chart-o fa-2x"></i> Morris Charts
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-table fa-2x"></i> Table Examples
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
