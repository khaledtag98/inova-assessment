import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { API_URL } from "../../config";
import { LANGS } from "../../constants/global";

import { resetAPIs } from "../store";

export const resrvedToken = localStorage.getItem("token") || "";
const resrvedLanguage = localStorage.getItem("lang") || LANGS.en;

export const loginWithEmail = createAsyncThunk(
  "auth/loginWithEmail",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
          remember: true,
        }),
      });
      let result = await response.json();
      if (response.status === 200) {
        localStorage.setItem("lang", result.data.user.language);

        localStorage.setItem("token", result.data.token);
        return result;
      } else {
        return thunkAPI.rejectWithValue(result);
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_: void, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();

    try {
      const response = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      let result = await response.json();
      if (response.status === 200) {
        // clear storage
        localStorage.removeItem("token");

        thunkAPI.dispatch(loggedout()); // exported below
        resetAPIs();
      } else {
        return thunkAPI.rejectWithValue(result);
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

interface AuthState {
  user: any; // Replace with actual type
  language: string;
  token: string;
  errors: Record<string, any>;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: AuthState = {
  user: null,
  language: resrvedLanguage,
  token: resrvedToken,
  errors: {},
  isFetching: false,
  isSuccess: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
    },
    loggedout: (state) => {
      state.user = null;
      state.token = "";
      state.errors = {};
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
    },
    setLanguage: (state, action: PayloadAction<{ language: string }>) => {
      state.language = action.payload.language;

      localStorage.setItem("lang", action.payload.language);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmail.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        state.language = payload.data.user.language;
        state.token = payload.data.token;

        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(loginWithEmail.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errors = payload.errors;
      })
      .addCase(loginWithEmail.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(logout.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.errors = payload.errors;
        state.isFetching = false;
        state.isError = true;
      });
  },
});

export const { clearAuth, setLanguage, loggedout } = authSlice.actions;

export const authSelector = (state: { auth: AuthState }) => state.auth;
