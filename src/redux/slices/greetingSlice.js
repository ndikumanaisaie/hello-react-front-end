import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGreetings } from '../../api/index';

export const fetchGreetings = createAsyncThunk('greeting/getGreetings', async () => {
  try {
    const response = await getGreetings();
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
      .addCase(fetchGreetings.pending, (state) => {
        state.isLoading = 'loading';
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.greetings = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state) => {
        state.isLoading = 'failed';
      });
  },
});

export default greetingSlice.reducer;