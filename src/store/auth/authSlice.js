import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, refreshUser } from './authOperations';
import authInitialState from './authInitialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user.name;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user.name;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLogin = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.name;
        state.isRefreshing = false;
        state.isLogin = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
