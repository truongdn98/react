import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { Col, Row } from "reactstrap";
import Product from "../Products/index";
// import productApi from '../../api/productApi'
import "./style.scss";
import Sort from "../Sort/index";
import Catalog from '../Catalog/index'
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct,getAllProduct2 } from "../../redux/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useLocation } from "react-router";
import { LinearProgress} from "@material-ui/core";
import Pagination from "../../components/Pagination";
import queryString from 'query-string'
import Filter from "../Filter";
import catalogApi from '../../api/catalogApi'
ListProducts.propTypes = {
  list: PropTypes.array,
  onAddToCart: PropTypes.func,
};

ListProducts.defaultProps = {
  list: [],
  onAddToCart: null,
};
//dispatch get productList

function ListProducts() {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState([])
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 6,
    // name: "bánh bao",
    //catalog:  "thân gỗ",
    
    // price  : 1,
    
    // filter : "name 2",
    sortBy: '',
    orderby: 'desc',
    
    
  })
   //dispatch get productList
 useEffect(() => {
    const fetchProductList = async () => {
      try {
        const actionResult = await dispatch(getAllProduct(filters));
        const actionResult2 = await dispatch(getAllProduct2({...filters,limit:'', page: '' }));
        const currentState = unwrapResult(actionResult);
        const currentState2 = unwrapResult(actionResult2);
        setProducts(currentState.items);
        setLoading(false)
        setPagination({...pagination,count: currentState2.items.length})
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductList();
  }, [filters]);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await catalogApi.getAll();
        console.log('cata',{ response });
        setCatalog(response)
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch product list at: ", error);
      }
    }
    fetchCatalog();
  }, []);

//PAGE
const [pagination, setPagination] = useState({
  page: 1,
  limit: 6,
  count: 0
})
const handlePageChange = (event, value) => {
  setPagination({...pagination,page: value})
  setFilters({...filters,page: value})
}
// FILTER

const handleChangeFilter = (e) => {
  setFilters({...filters,catalog: e.target.value })
}
//Sort
  const handleSortChange = (e) => {
    setFilters({...filters,order: e.target.value,sortBy: 'price' })
  };
 

  // LOADING
 
  // useEffect(() => {
  //   if (loading) 
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  if (loading) {
    return <LinearProgress />;
  }
  return (
    <div className="product-list col-lg-12 ">
      {/* <Catalog catalog={catalog} /> */}
      <Sort handleSortChange={handleSortChange} />
      <Filter catalog={catalog} handleChangeFilter={handleChangeFilter}/>
      <div className="product-container col-lg-12 justify-content-center">
        {products.map((item) => {
          return <Product product={item} key={item.id} />;
        })}
      </div>
        <Pagination pagination={pagination} handlePageChange={handlePageChange}/>  
    </div>
  );
}

export default ListProducts;
