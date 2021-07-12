import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.scss";
import { IoBagHandle } from "react-icons/io5";
import { IconButton, Fade } from "@material-ui/core";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import Header from "../Header";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

export default function MenuMobile() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (left, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, left: open });
  };

  
  return (
    <div>
      <div className="d-md-none header-mobile">
        <Link to="/" className="">
          <img src={logo} alt="" />
        </Link>

        <span className="text-xl">
          <IconButton
            onClick={toggleDrawer(state.left, true)}
            className="icon-bar"
          >
            <RiBarChartHorizontalLine />
          </IconButton>
        </span>
      </div>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer(state.left, false)}
        onOpen={toggleDrawer(state.left, true)}
      >
        <div className="menu-mobile fixed-top text-center ">
          <div className="mt-3 mb-3 text-center">
            <span>MENU</span>
          </div>

          <nav>
            <ul className="menu mr-auto p-0">
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={toggleDrawer(state.left, false)}
                  onKeyDown={toggleDrawer(state.left, false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="nav-link"
                  onClick={toggleDrawer(state.left, false)}
                  onKeyDown={toggleDrawer(state.left, false)}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={toggleDrawer(state.left, false)}
                  onKeyDown={toggleDrawer(state.left, false)}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
