import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
import {
  fetchUsersApi,
  fetchUserApi,
  newUserApi,
  deleteUserApi,
  updateUserApi,
} from '../../api/userApi';

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
// fetch a single user
export const fetchUser = createAsyncThunk(
  'users/get',
  async (
    // @ts-ignore
    { token, id },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetchUserApi(token, id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// new user
export const newUser = createAsyncThunk(
  'users/create',
  // @ts-ignore
  async ({ token, value }, { rejectWithValue }) => {
    try {
      const response = await newUserApi(token, value);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// delete user
export const deleteUser = createAsyncThunk(
  'users/delete',
  // @ts-ignore
  async ({ token, id }, { rejectWithValue }) => {
    try {
      const response = await deleteUserApi(token, id);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// delete user
export const updateUser = createAsyncThunk(
  'users/update',
  // @ts-ignore
  async ({ token, value, id }, { rejectWithValue }) => {
    try {
      const response = await updateUserApi(token, value, id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
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
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state: any, action) => {
        state.loading = false;
        state.users = {};
        state.error = action.error.message;
      })
      .addCase(newUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(newUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // @ts-ignore
        state.users.data.push(action.payload);
      })
      .addCase(newUser.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const userId = action.payload;

        // @ts-ignore
        state.users.data = state.users.data.filter(
          // @ts-ignore
          (user) => user.id !== userId
        );
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state: any, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updated_info = action.payload;
        console.log(updated_info);

        // @ts-ignore
        const index = state.users.data.findIndex(
          // @ts-ignore
          (user) => user.id === updated_info.id
        );

        if (index !== -1) {
          // @ts-ignore
          state.users.data[index] = updated_info;
        }

        state.loading = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state: any, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
