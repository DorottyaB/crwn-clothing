import { combineReducers } from 'redux';
import cartSlice from './features/cart/cartSlice';
import userSlice from './features/user/userSlice';
import categoriesSlice from './features/categories/categoriesSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  categories: categoriesSlice,
  cart: cartSlice,
});
