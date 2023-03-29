import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './slices/greetingsSlice';


const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
