import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './redux/stockSlice';

export default configureStore({
  reducer: {
    stock: stockReducer,
  },
});
