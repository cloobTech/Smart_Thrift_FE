import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
import { fetchUsersApi } from '../../api/userApi';

const initialState = {
  users: {},
  loading: false,
  error: null,
};

// fetch  users
export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async (
    // @ts-ignore
    { token, page, page_size, column = null, search_string = null },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetchUsersApi(
        token,
        page,
        page_size,
        column,
        search_string
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'usesr',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state: any, action) => {
        state.loading = false;
        state.users = {};
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
