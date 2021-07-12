import React from "react";
import item from "../../assets/itemdemo.png";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/productSlice";

function Product({ product }) {
  const dispatch = useDispatch();

  
  
  return (
    
    <div className="product-item col-12 col-md-6 col-lg-4">
      
      <Link to={`/product/${product.id}`} className="">
        <div className="product-content">
          <img src={product.colors[0].img} alt="" />
          <h4 className="product-catelog">{product.catalog}</h4>
          <h4 className="product-name">{product.name}</h4>
          <div className="bar">
            <span className="product-price">{product.price} VNĐ</span>
            <FaRegHeart className="icon" />

            <IconButton aria-label="delete" size="small" color="primary">
              <IoBagHandle className=" addcart" />
            </IconButton>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
