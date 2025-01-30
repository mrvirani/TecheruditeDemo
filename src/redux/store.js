import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './slice';
import { authApi } from '../api/authApi';
import { eventApi } from '../api/EventApi';
import { eventDataApi } from '../api/eventDataApi';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], // persist only auth state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(authApi.middleware,eventDataApi.middleware),
});

export const persistor = persistStore(store);

export const useAppDispatch = () => store.dispatch;
export const useAppSelector = (state) => state;
