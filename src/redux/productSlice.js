import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import productApi from '../api/productApi'

export const getAllProduct = createAsyncThunk(
    "product/getProduct",
    async (params, thunkAPI) => {
      try {
        const response = await productApi.getAll(params);
        console.log('redux',{ response });
        return response;
      } catch (error) {
        console.log("Failed to fetch product list at: ", error);
      }
    }
  );
  export const getAllProduct2 = createAsyncThunk(
    "product/getProduct",
    async (params, thunkAPI) => {
      try {
        const response = await productApi.getAll(params);
        console.log('redux2',{ response });
        return response;
      } catch (error) {
        console.log("Failed to fetch product list at: ", error);
      }
    }
  );

const products = createSlice({
    name: 'product  ',
    initialState: {
        productList: [],
        totalRow: 0,
    },
    reducers: {},
    extraReducers: {
      [getAllProduct.fulfilled]: (state, action) => {
        state.productList = action.payload.data;
        // state.totalRow = action.payload.totalRow;
      },
    },
  });
const {reducer, actions} = products
export const {addToCart} = actions
export default reducer