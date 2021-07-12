import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
// import { Col, Row } from "reactstrap";
import Product from "../Products/index";
// import productApi from '../../api/productApi'
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useLocation } from 'react-router'
import img from '../../assets/banner2.png'
import img2 from '../../assets/banner3.png'
import img3 from '../../assets/banner/banner4.png'
import img4 from '../../assets/banner/banner5.png'
Banner.propTypes = {
  list: PropTypes.array,
  onAddToCart: PropTypes.func,
};

Banner.defaultProps = {
  list: [],
  onAddToCart: null,
};
//dispatch get productList



function Banner() {
  const location = useLocation()
  const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    useEffect(() => {
     const fetchProductList = async () => {
        try {
          //const requestUrl = 'https://60d72de9307c300017a5f6e9.mockapi.io/projects';
          // const response = await productApi.getAll()
          // console.log(response)
          // setProducts(response)

          const actionResult = await dispatch(getAllProduct());
          const currentState = unwrapResult(actionResult)
          // console.log(currentState)
          setProducts(currentState)
        } catch (error) {
          console.log(error)
        }
      }
        fetchProductList()
    },[])
 
    //dispatch get productList
 

  return (
    <>
      <img loading="lazy" className="image-item" src={img3} alt="" />
      <img loading="lazy" className="image-item" src={img} alt="" />
      <img loading="lazy" className="image-item" src={img2} alt="" />
      <img loading="lazy" className="image-item" src={img4} alt="" />
      {/* <img loading="lazy" className="image-item" src={img} alt="" />
      <img loading="lazy" className="image-item" src={img} alt="" /> */}
    

    </>
  );
}

export default Banner;
