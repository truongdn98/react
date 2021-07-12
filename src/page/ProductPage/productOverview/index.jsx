import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { IoIosWater } from "react-icons/io";
import {RiSunFoggyFill} from "react-icons/ri";
import {GiFertilizerBag} from "react-icons/gi";
ProductOverview.propTypes = {
  overview: PropTypes.object.isRequired,
};
ProductOverview.defaultProps = {
  overview: {},
};

function ProductOverview({ overview }) {
  return (
    <ul className="p-0 overview d-flex justify-content-between">
      <li className="overview-item d-flex">
        <IoIosWater className="icon" />
        <div>
          <span>{overview.water}</span>
          <h6>Water</h6>
        </div>
      </li>
      <li className="overview-item d-flex">
        <RiSunFoggyFill className="icon" />
        <div>
          <span>{overview.light}</span>
          <h6>light</h6>
        </div>
      </li>
      <li className="overview-item d-flex">
        <GiFertilizerBag className="icon" />
        <div>
          <span>{overview.fertilizer}</span>
          <h6>Fertilizer</h6>
        </div>
      </li>
    </ul>
  );
}

export default ProductOverview;
