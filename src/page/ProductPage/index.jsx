import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import productApi from "../../api/productApi";
// import ListProducts from '../../components/ListProducts'
import {ImRadioChecked2} from "react-icons/im"
import { IoBagHandle } from "react-icons/io5";
import "./style.scss";
import ProductOverview from "./productOverview/index";
import ProductDetail from "./ProductDetail/index";
import SelectColor from "./SelectColor/index";
import Amount from '../../components/Amount/index'
import { LinearProgress,Button  } from "@material-ui/core";
import { addProduct } from "../../redux/cartSlice";
import { useLocation } from 'react-router'
import ProductBar from '../../components/Bar/index'

function ProductPage() {
  useEffect(() => {
    console.log("homepage mounted or updated");
    document.body.classList.add('product-detail-page');
  },[]);

  useEffect(() => {
    return () => {
      console.log("homepage unmounted");
      document.body.classList.remove('product-detail-page');
    };
  }, []);
 

  const productId = useLocation().search.split('?id=')[1]
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selected, setSelected] = useState({
    index: 0,
    count: 0,
  });
//  const handleChange = (event) => {
//     setSelected({...selected, count: event.target.value});
//   }








////
  const changeColor = (index) => {
    console.log("click", index);
    console.log(productId)
    setSelected({
      ...selected,
      index: index,
      count: 0
    });
  };
  const increase = () => {
    if(selected.count < product.colors[selected.index].quantity)
    {
      let newCount = selected.count + 1
      setSelected({...selected, count: newCount})
    }
  
  }
  const decrease = () => {
    if( selected.count > 0){ 
       let newCount = selected.count - 1
      setSelected({...selected, count: newCount})
    }
  }
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const productValues = {
      id: product.id,
      name: product.name,
      image: product.colors[selected.index].img,
      price: product.price,
      color: product.colors[selected.index].color,
      quantityR: product.colors[selected.index].quantity,
      quantity: selected.count,
    
    };
    if(selected.count === 0 ) alert('Bạn vui lòng chọn số lượng')
    
    if(selected.count > 0) dispatch(addProduct(productValues));
  };

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await productApi.get(id);
  //       setProduct(response);
  //       setLoading(false)
  //     } catch (error) {
  //       console.log("Failed to fetch data product at: ", error);
  //     }
  //   };
  //   fetchProduct();
  // }, []);

 
  const fetchProduct = async () => {
    try {
      const response = await productApi.get(id);
      setProduct(response);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch data product at: ", error);
    }
  };

  useEffect(() => {
    if (loading) fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <LinearProgress />;
  }
  return (
    <>
      <div className="container col-12  ">
        <div className="row detail ">
          <div className="product-img col-md-6">
            <img src={product.colors[selected.index].img} alt="" />
          </div>
          <ProductDetail product={product} />
          <div className="col-md-6 d-none d-md-block">
            <div className="row select  mt-3">
          <div className="col-6"> 
          <h6>
              Tùy chỉnh màu sắc:
            </h6>
            {
                <ImRadioChecked2 style={{ color: product.colors[selected.index].color }}>
                </ImRadioChecked2>
              }
            <ul className="color-list d-inline-flex mt-0">
            {product.colors
              .sort((a, b) => b.quantity - a.quantity)
              .map((item, index) => {
                return (         
                    <SelectColor
                    color={item}
                    changeColor={changeColor.bind(this, index)}
                    key={index}
                  />
                );
              })}
              </ul> </div>
           
          <div className="col-6">
              <h6 >
              Số lượng:
            </h6>
           <Amount  selected={selected} increase={increase}  decrease={decrease}/>
              
            </div>
          </div >
           <Button className="mt-4 addToCart" onClick={handleAddToCart}><IoBagHandle className="addcart-icon" />Add to cart</Button>
          
          </div>
          <div className="col-md-6 bio">
            <h6 className="overview-title">Overview</h6>
            <ProductOverview
              overview={product.overview}
              key={id}
            ></ProductOverview>
            <h6 className="overview-title">Plant Bio</h6>
            <p className="justify mb-5 mb-md-0">{product.bio}</p>
          </div>
        </div>
        <div className="row">
        <ProductBar handleAddToCart={handleAddToCart} changeColor={changeColor} product={product} selected={selected} increase={increase} decrease={decrease}></ProductBar> 
        </div>
        
      </div>
    </>
  );
}

export default ProductPage;
