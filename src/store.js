import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gridtApi } from './services/gridtApi';

export const store = configureStore({
  reducer: {
    [gridtApi.reducerPath]: gridtApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gridtApi.middleware),
});

setupListeners(store.dispatch);

export default store;
