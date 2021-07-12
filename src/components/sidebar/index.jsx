import React from "react";
import {NavLink} from 'react-router-dom'
import {RiStarSmileFill} from "react-icons/ri"
import {GiThreeLeaves} from "react-icons/gi"
import {AiFillThunderbolt} from "react-icons/ai"
import { IconButton } from '@material-ui/core';
import './style.scss'
function SideBar() {
  return (
    
      <div className="side-bar p-4 pt-0 ">
          <h3 className="mb-5 mt-4 ">Explorer</h3>
          <ul className="p-0" id="nav-bar">
            <li>
              <NavLink to="/" activeClassName='is-active' exact className="nav-link">
                <RiStarSmileFill color="#fbff02" className="icon"/> Tin mới
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName='is-active'    className="nav-link">
              <AiFillThunderbolt color="#ff6700" className="icon"/> Nổi bật
              
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" activeClassName='is-active' className="nav-link">
              <GiThreeLeaves color="#0D986A" className="icon"/>  Cây cảnh
              </NavLink>
            </li>
          </ul>
       -
      </div>
    
  );
}

export default SideBar;
