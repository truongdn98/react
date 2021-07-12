import React, {  useState } from "react";
import {useSelector} from 'react-redux'
import { Link,NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.scss";
import { IoBagHandle, IoOptionsSharp,IoBagAddSharp ,IoBag} from "react-icons/io5";
import { IconButton, Fade, Button,Badge } from "@material-ui/core";
import { FaCartPlus } from "react-icons/fa";
import Amount from "../../components/Amount/index";
import { ImRadioChecked2 } from "react-icons/im";
import SelectColor from "../../page/ProductPage/SelectColor/index";

const ProductBar = (props) => {
  const cart = useSelector((state) => state.cart);
  const { selected, decrease, increase, product, changeColor,handleAddToCart } = props;
  const [state, setState] = useState({
    isShow: false,
    listMenuOpen: [],
    locationUrl: "",
  });
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <div className={showMenu ? "cart-mb cart-mb-open d-md-none" : "cart-mb d-md-none"}> 
    <NavLink to="/cart"  className="nav-link cart-mb-icon">
            <Badge badgeContent={cart.length} max={9}  color="secondary">
            <IoBag />
            </Badge>
        </NavLink>
    <div class="circle1"></div>
    <div class="circle2"></div>
  </div>
    <div className="d-md-none product-bar">
      <Button className={!showMenu ? 'abc' : 'adbc'} onClick={() => setShowMenu(!showMenu)}>
        <IoOptionsSharp/>Chọn sản phẩm
      </Button>
      <Link to="/">
      <Button className=""><IoBagHandle/>
       Xem giỏ hàng
      </Button></Link>


      {showMenu ? (
        <Fade in={showMenu} timeout={1000}>
          <div
            className="fixed-select fixed-top h-100 w-100"
            onClick={() => setShowMenu(false)}
          ></div>
        </Fade>
      ) : (
        ""
      )}
      {showMenu ? (
        <Fade in={showMenu} timeout={1000}>
          <div className="select-product fixed-bottom text-center ">
            <div className=" text-center product-bar product-bar-oen">
            <Button className={showMenu? 'abc' : 'abc'} onClick={() => setShowMenu(!showMenu)}>
        <IoOptionsSharp/>Chọn sản phẩm
      </Button>
      <Button onClick={handleAddToCart} className=""><IoBagAddSharp/> Thêm vào giỏ</Button>
            </div>
       
            <nav>
              <ul className="menu mt-4 mb-3 mr-auto p-0 text-center">
                <li className="currentColor">
                {
                      <ImRadioChecked2 
                        style={{ color: product.colors[selected.index].color }}
                      ></ImRadioChecked2>
                    }
                  <div className="">
                    <h6 >Tùy chỉnh màu chậu:</h6>
                   
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
                    </ul>{" "}
                  </div>
                </li>
                <li>
                  <Amount
                    selected={selected}
                    increase={increase}
                    decrease={decrease}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </Fade>
      ) : (
        ""
      )}
    </div>
    </>
  );
};
export default ProductBar;
