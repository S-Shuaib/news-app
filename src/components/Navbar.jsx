import React from "react";
import logo from "../assets/ProgPinnacle-removebg-preview.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar({ setCategory }) {
  return (
    <nav className="navbar-container">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div>
          <div>
            <NavLink
              to={"/"}
              onClick={() => {
                setCategory("general");
              }}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/business"}
              onClick={() => {
                setCategory("business");
              }}
            >
              Business
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/entertainment"}
              onClick={() => {
                setCategory("entertainment");
              }}
            >
              Entertainment
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/health"}
              onClick={() => {
                setCategory("health");
              }}
            >
              Health
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/science"}
              onClick={() => {
                setCategory("science");
              }}
            >
              Science
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/sport"}
              onClick={() => {
                setCategory("sport");
              }}
            >
              Sport
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/technology"}
              onClick={() => {
                setCategory("technology");
              }}
            >
              Technology
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
