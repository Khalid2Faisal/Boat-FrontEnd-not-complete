import { createAsyncThunk } from "@reduxjs/toolkit";

import authService from "../../services/auth";

import { PreRegisterData } from "./authTypes";

export const preRegister = createAsyncThunk(
  "auth/preRegister",
  async (data: PreRegisterData, thunkAPI) => {
    try {
      return await authService.preRegister(data);
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user: { token: string }, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (user: { email: string; password: string }, thunkAPI) => {
    try {
      const loginData = await authService.login(user);
      if (loginData) {
        authService.authenticate(loginData);
      }
      return loginData;
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

type LogOutArgs = Function | undefined;

export const logout = createAsyncThunk(
  "auth/logout",
  async (next: LogOutArgs, thunkAPI) => {
    try {
      if (next) {
        return await authService.logout(next);
      }
      return await authService.logout();
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
