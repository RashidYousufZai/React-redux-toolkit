import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const getAllData = createAsyncThunk("gitUsers", async () => {
  const res = await fetch("https://api.github.com/users");
  const result = res.json();
  return result;
});

export const gitUserSlice = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAllData.pending]: (state) => {
      state.loading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const gitUserReducer = gitUserSlice.reducer;
