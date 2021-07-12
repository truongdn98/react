import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { LinearProgress} from "@material-ui/core";
function Catalog(props) {
  // const [product, setProduct] = useState()
const {catalog} = props


  return (
    <div>
      {catalog.map((cat) => {
        return <li key={cat.id}>{cat.name}</li>;
      })}
    </div>
  );
}

export default Catalog;
