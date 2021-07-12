const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      let isAdd = true;
      const newProduct = action.payload;

      state.forEach((product) => {
      
        if (product.id === newProduct.id && product.color === newProduct.color) {
          isAdd = false;
          
          if(product.quantity + newProduct.quantity > product.quantityR ) {
            alert(`Hiện chỉ còn lại ${product.quantityR - product.quantity } sản phẩm. Bạn vui lòng kiểm tra lại!!`)
            return
          } 
          product.quantity += newProduct.quantity;
    
          return;
        }
      });

      if (isAdd) state.push(newProduct);
    },

    removeProduct: (state, action) => {
      const newCart = state.filter((product) => product.id != action.payload);
      return newCart;
    },
  },
});
const {reducer, actions} = cartSlice
export const { addProduct, removeProduct } = actions;
export default reducer;
