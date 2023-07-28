import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = categorySlice.actions

export default categorySlice.reducer