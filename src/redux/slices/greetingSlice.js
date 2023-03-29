import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:3000/api/greetings';
const http = axios.create({ baseURL: BASE_URL });

export const getGreetings = createAsyncThunk('greeting/getGreetings', async () => {
  try {
    const response = await http.get();
    return response.data;
  } catch (error) {
    return error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    isLoading: 'idle' || 'loading' || 'succeeded' || 'failed',
    greetings: [],
  },

  extraReducers(builder) {
    builder
      .addCase(getGreetings.pending, (state) => {
        state.isLoading = 'loading';
      })
      .addCase(getGreetings.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.greetings = action.payload;
      })
      .addCase(getGreetings.rejected, (state) => {
        state.isLoading = 'failed';
      });
  },
});

export default greetingSlice.reducer;