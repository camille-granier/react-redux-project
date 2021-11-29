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
      const newItem = action.playload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        //reminder: manipulating state ok because we are using redux toolkit, otherwise never do it
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        //reduxtoolkit ok to manipulate state
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.playload;
    }
  }
})
