import React from "react";
import IconRick from "../../Assets/img/icon.png";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header-img" src={IconRick} alt="" />
      </Link>

      <ul className="header-list">
        <li>
          <NavLink
            className="header-nav"
            to="/character"
            activeClassName="selected"
          >
            Character
          </NavLink>
        </li>
        <li>
          <NavLink
            className="header-nav"
            to="/location"
            activeClassName="selected"
          >
            Location
          </NavLink>
        </li>
        <li>
          <NavLink
            className="header-nav"
            to="/episode"
            activeClassName="selected"
          >
            Episode
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
