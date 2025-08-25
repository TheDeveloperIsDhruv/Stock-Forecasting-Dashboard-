import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPrediction = createAsyncThunk(
  'stock/fetchPrediction',
  async ({ ticker, days }) => {
    const response = await axios.post('http://127.0.0.1:5000/predict', { ticker, days });
    return response.data;
  }
);

const stockSlice = createSlice({
  name: 'stock',
  initialState: { predictions: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrediction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPrediction.fulfilled, (state, action) => {
        state.predictions = action.payload.predictions;
        state.status = 'succeeded';
      })
      .addCase(fetchPrediction.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default stockSlice.reducer;
