import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { generalAPI } from "./services/general";

import { authSlice } from "./slices/auth";

const apis = [generalAPI];

const slices = [authSlice];

export const store = configureStore({
  reducer: {
    ...apis.reduce(
      (acc, api) => ({ ...acc, [api.reducerPath]: api.reducer }),
      {}
    ),
    ...slices.reduce(
      (acc, slice) => ({ ...acc, [slice.name]: slice.reducer }),
      {}
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apis.map((api) => api.middleware)
    ),
});

export const resetAPIs = () => {
  apis.forEach((api) => store.dispatch(api.util.resetApiState()));
};

setupListeners(store.dispatch);
