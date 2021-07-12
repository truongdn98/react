import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, IconButton } from "@material-ui/core";
import { FaShoppingBag } from "react-icons/fa";
import "./style.scss";
import "../../redux/cartSlice";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <IconButton aria-label="cart">
        <Badge badgeContent={cart.length} max={9} color="secondary">
          <FaShoppingBag />
        </Badge>
        <div className="show-cart ">
          {cart.length === 0 ? (
            <div className="no-order text-center">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nl9M_exbaJFJv0tsRcn4LxCm-agS6G-Ehg&usqp=CAU"
              />
              <span>Chưa có sản phẩm nào</span>
            </div>
          ) : (
            <ul>
              {cart.map((item) => {
                return (
                  <li>
                    <div className="cart-item">
                      <img src={item.image} alt="" className="recent-image" />
                      <div className="product-info">
                        <h6 className="product-cartitem">{item.name}</h6>
                        <span className="recent-position">{item.color}</span>
                      </div>
                      <div className="recent-meta">
                        <span className="cart-price increase">
                          {item.price} VNĐ
                        </span>
                        <time className="cart-quantity">
                          Số lượng: {item.quantity}
                        </time>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </IconButton>
    </div>
  );
}

export default Cart;
