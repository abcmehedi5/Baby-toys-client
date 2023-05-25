import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import {
  useErrorAlert,
  useSuccessAlert,
} from "../../../CustomHook/UseSweetAlert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        useSuccessAlert("logout successfull");
      })
      .catch((error) => {
        useErrorAlert(error.message);
      });
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#80d4ff" }}
    >
      <div className="container-fluid container">
        <img
          className="img img-fluid logo"
          src="https://i.ibb.co/WfhDcts/3331.png"
          alt=""
        />
        <Link className="navbar-brand fw-bold" to={"/"}>
          <h3 className="fw-bold text-black"> BABY-TOYS</h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav menuli m-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item me-3">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            {user && (
              <li className="nav-item me-3">
                <NavLink to={"/all_toys"}>All Toys</NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item me-3">
                <NavLink to={"/my_toys"}> My Toys</NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item me-3">
                <NavLink to={"/add_toy"}> Add A Toy</NavLink>
              </li>
            )}
            <li className="nav-item me-3">
              <NavLink to={"/blog"}> Blog</NavLink>
            </li>
            {!user && (
              <li className="nav-item me-3">
                <NavLink to={"/login"}> Login</NavLink>
              </li>
            )}
          </ul>
          <div className="nav-right d-flex align-items-center">
            {/* log out button */}
            {user && (
              <span>
                <button
                  onClick={() => handleLogOut()}
                  className="btn btn-secondary me-3"
                >
                  Logout
                </button>
              </span>
            )}
            {user && (
              <div className="profile">
                <img src={user?.photoURL} alt="profile" />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
