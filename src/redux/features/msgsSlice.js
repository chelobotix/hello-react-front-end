import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: '',
  isLoading: false,
  isError: false,
};

export const fetchMessages = createAsyncThunk('get/messages', async () => {
  const url = 'http://127.0.0.1:3000/api/v1/message/random';
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data;
});

export const msgsSlice = createSlice({
  name: 'Messages',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(fetchMessages.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }));

    builder.addCase(fetchMessages.rejected, (state) => ({
      ...state,
      isError: true,
      isLoading: false,
    }));
  },
});

export default msgsSlice.reducer;
