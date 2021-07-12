import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productSlice'
import cartReducer from './cartSlice'
const rootReducer = {
    products :  productReducer,
    cart: cartReducer
}
const store = configureStore({
    reducer: rootReducer
})

export default store 
