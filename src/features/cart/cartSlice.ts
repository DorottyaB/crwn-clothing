import { createSlice } from '@reduxjs/toolkit';
import { CategoryItem } from '../categories/categoriesSlice';

export type CartItem = CategoryItem & {
  quantity: number;
};

export interface CartState {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
}

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const productToAdd = action.payload;
      const existingCartItem = state.cartItems.find(cartItem => cartItem.id === productToAdd.id);
      if (existingCartItem) {
        existingCartItem.quantity = existingCartItem.quantity + 1;
      } else {
        state.cartItems.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeItemFromCart(state, action) {
      const cartItemToRemove = action.payload;
      // find the cart item to remove
      const existingCartItem = state.cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
      );
      // check if quantity is equal to 1, if it is remove that item from the cart
      if (existingCartItem && existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
      } else if (existingCartItem && existingCartItem.quantity > 1) {
        existingCartItem.quantity = existingCartItem.quantity - 1;
      }
    },
    clearItemFromCart(state, action) {
      const cartItemToClear = action.payload;
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearItemFromCart, setIsCartOpen, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
