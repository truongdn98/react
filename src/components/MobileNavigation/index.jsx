import React, {useContext} from 'react';
import { IoBagHandleOutline } from "react-icons/io5";
import {BiHomeSmile} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import {RiPlantLine} from "react-icons/ri"
import { SelectedNavContext } from '../../context/SelectedNavContext.js'
import { NavLink,Link } from "react-router-dom";
import './style.scss'
import {useSelector} from 'react-redux'
import '../../redux/cartSlice'
import {Badge, IconButton } from '@material-ui/core';
export default function MobileNavigation() {
  const { selected, selectedNav } = useContext(SelectedNavContext);
      const cart = useSelector((state) => state.cart);

  return (
    <div className=" mb-nav d-block d-md-none fixed-bottom d-flex justify-content-around bg-light">
      <NavLink to="/" activeClassName='is-active' exact  className="nav-link">
        
      <BiHomeSmile />
      </NavLink>
      <NavLink to="/product" activeClassName='is-active'  className="nav-link ">
      <RiPlantLine />
      </NavLink  >
      <NavLink to="/cart" activeClassName='is-active'  className="nav-link cart-m">
          <Badge badgeContent={cart.length} max={9}  color="secondary">
          <IoBagHandleOutline />
          </Badge>
      </NavLink>
      <NavLink to="/login" activeClassName='is-active'  className="nav-link">
      <AiOutlineUser />
      </NavLink>
    
    
    </div>
   
  );
}