import React from 'react'
import {FaStar} from 'react-icons/fa'
import PropTypes from "prop-types";
import "./style.scss";
function ProductDetail({product}) {
    ProductDetail.propTypes = {
        overview: PropTypes.object.isRequired,
      };
      ProductDetail.defaultProps = {
        overview: {},
      };
    return (
        
            <div className="col-md-6 product-info">
            <div className="d-flex justify-content-between align-items-center product-detail">
              <span className="product-catelog">{product.catalog}</span>
              <label className="product-star">
                <FaStar></FaStar> {product.star}
              </label>
            </div>

            <h4 className="product-name">{product.name}</h4>
            <div className="price d-lg-flex align-items-center">
              <div>
                <h6 className="title">Price</h6>
                <span className="product-price me-lg-1">{product.price} VNĐ</span>
              </div>
              <div className="full">
                <h6 className="title ">Size</h6>
                <span className="product-size">{product.size}"H</span>
              </div>
            </div>
          </div>
    
        
    )
}

export default ProductDetail
