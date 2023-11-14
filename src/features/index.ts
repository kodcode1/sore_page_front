import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    value: 0,
    categoryChoose: ""
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setCategory: (state, action) => {
        state.categoryChoose = action.payload
    }
  },
});

export const { setCategory } = exampleSlice.actions;
export default exampleSlice.reducer;