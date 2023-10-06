import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, Credentials, LoginResponse } from '../../api/authApi';
import { toast } from 'react-toastify';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error?: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  error: false,
  loading: false,
};

// Generate pending, fulfilled and rejected action types
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (cred: Credentials, { rejectWithValue }) => {
    try {
      const response = await loginUserApi(cred);
      const data = response.data;
      const token = data.token;

      if (response.status >= 200 && response.status < 300) {
        toast.success('Login Successful');
      }
      // save token and userdetails to local storage
      localStorage.setItem('token', token);
      return data as LoginResponse;
    } catch (error: any) {
      if (error.response.status >= 400 && error.response.status < 500) {
        toast.error('Invalid Credentials');
      } else {
        toast.error(error.message);
      }
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = false;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = true;
      });
  },
});

export default authSlice.reducer;
