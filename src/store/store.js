import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice';

export default configureStore({
  reducer: {
    quote: quoteReducer,
  },
});