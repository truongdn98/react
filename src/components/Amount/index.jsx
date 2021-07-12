import React from 'react'
import { IconButton  } from "@material-ui/core";
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import "./style.scss";

function Amount(props) {
 
    const { selected, decrease, increase } = props;
    return (
        
             <div className="box d-inline">
            <IconButton  size="small" onClick={decrease} >
                 <FaMinusCircle></FaMinusCircle>
               </IconButton>
               <input type="text" value={selected.count}  />
              
               <IconButton  size="small"  onClick={increase}>
                 <FaPlusCircle></FaPlusCircle>
               </IconButton>
              </div>
        
    )
}
Amount.propTypes = {
    decrease: PropTypes.func,
    increase: PropTypes.func,
  };

export default Amount
