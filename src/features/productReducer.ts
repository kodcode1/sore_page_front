import { createSlice } from '@reduxjs/toolkit';
import { ProductInterface } from "../interface/ProductInterface";



const initialState = {
    value: 0,
    categoryChoose: "",
    currentProduct:{}
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategory: (state, action) => {
        state.categoryChoose = action.payload
    },
    setProduct: (state, action) => {
      state.currentProduct = action.payload
  }
  },
});

export const { setCategory,setProduct } = productSlice.actions;
export default productSlice.reducer;