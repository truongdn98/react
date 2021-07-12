import React, {useState, useEffect} from "react";

import Product from "../Products/index";
// import productApi from '../../api/productApi'
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useLocation } from 'react-router'
import Slider from "react-slick";
//dispatch get productList

function ListProducts2() {

  const dispatch = useDispatch()
    const [products, setProducts] = useState([])
   
    useEffect(() => {
     const fetchProductList = async () => {
        try {
          const actionResult = await dispatch(getAllProduct());
          const currentState = unwrapResult(actionResult)
          console.log(currentState)
          setProducts(currentState.items)
        } catch (error) {
          console.log(error)
        }
      }
        fetchProductList()
    },[])
 
    //dispatch get productList
 
    const settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      speed: 3000,
      autoplaySpeed: 1500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return ( 
               
   
    <div className="product-list col-lg-12 ">
      <span className="title-product d-block d-md-none mt-4 p-3 "> 
         <h3 className="title"> SẢN PHẨM HOT</h3>
       </span>
         <Slider {...settings}>
       {/* <div className="product-container col-lg-12 justify-content-center"> */}
    
             
        {products.map((item) => {
          return <Product product={item} key={item.id} />;
        })}
        
      {/* </div> */}
      </Slider>
    </div>
  );
}

export default ListProducts2;
