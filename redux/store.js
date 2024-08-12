// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import CategoryReducer from './reducer/categoryReducer';

export const store = configureStore({
  reducer: {
    CategoryReducer: CategoryReducer, // Add your slice reducer here
  },
});
