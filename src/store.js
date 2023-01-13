import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import categoriesSlice from './features/categories/categoriesSlice';
import userSlice from './features/user/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

// const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: {
    user: userSlice,
    categories: categoriesSlice,
    cart: cartSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
