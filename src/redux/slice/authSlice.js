import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../api/authApi';

const initialState = {
  accessToken: null,
  userIsLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.userIsLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        console.log("action.payload", action.payload);
        state.data= action.payload.data
        state.accessToken = action.payload?.data?.token;
        state.userIsLogin = true;
      }
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
