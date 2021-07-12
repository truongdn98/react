import React from "react";
import { NavLink,Link } from "react-router-dom";
import logo from '../../assets/logodemo.jpg'
import Cart from "../Cart/index";
import './style.scss'
function Header() {
  return (
    <header className="header d-none d-md-block">
      <div className="header__container">
       
         <Link to="/"   className="header__logo">
            <img src={logo} alt="" />
          </Link>
          <nav>
          <ul className="header-menu mr-auto">
            <li>
              <NavLink to="/" activeClassName='is-active' exact className="nav-link">
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName='is-active'  className="nav-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName='is-active'  className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <Cart></Cart>
      </div>
    </header>
  );
}

export default Header;
