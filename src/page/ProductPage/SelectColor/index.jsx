import React, { useState } from "react";
import PropTypes from "prop-types";
import {AiOutlineClose} from "react-icons/ai"
import { Button } from "@material-ui/core";
import "./style.scss";

export const SelectColor = (props) => {
  const { changeColor, color } = props;
  const style = {
    minWidth: "20px",
    background: color.color,
    borderRadius: "20px",
    opacity: color.quantity ? '1' : '0.9',
    color: '#000'
  };

  return (
    <li> {
        color.quantity ?  <Button
        className="btn-color"
        onClick={changeColor}
        style={style}
      ></Button> :
     
           <Button
      className="btn-color"
      disabled
      style={style}
    >X</Button>
    
    
    }
     
    </li>
  );
};

SelectColor.propTypes = {
  changeColor: PropTypes.func,
};

export default SelectColor;
