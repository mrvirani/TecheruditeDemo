// src/app/reducers/index.ts
import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import favoritesReducer from './favoritesSlice';
import { authApi } from '../../api/authApi';
import { eventDataApi } from '../../api/eventDataApi';


const reducer = combineReducers({
  auth: authReducer, // Local auth state
  favorites: favoritesReducer,
  [authApi.reducerPath]: authApi.reducer, // RTK Query API state for auth
  [eventDataApi.reducerPath]: eventDataApi.reducer, 
});

const rootReducer = (state,action) => {
  if (action.type === 'auth/logout') {
    state = {
      ...state,
      auth: {
        accessToken: null,
        userIsLogin: false,
      },
    };
  }
  return reducer(state, action);
};

export default rootReducer;
