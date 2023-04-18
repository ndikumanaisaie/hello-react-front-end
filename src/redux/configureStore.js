import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './slices/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
