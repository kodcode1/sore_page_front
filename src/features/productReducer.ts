import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    value: 0,
    categoryChoose: ""
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategory: (state, action) => {
        state.categoryChoose = action.payload
    }
  },
});

export const { setCategory } = productSlice.actions;
export default productSlice.reducer;