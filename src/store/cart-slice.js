import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  } ,
  reducers: {
    addItemToCart(state, action) {
      item = action.playload
    },
    removeItemFromCart(state, action) {}
  }
})
