// Create Redux Store
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import usersReducer from './slices/usersSlice';

// retrieve token from local storage
const token: any = localStorage.getItem('token');

// Helper function to calculate token expiration time
const getTokenExpirationTime = (token: any) => {
  if (!token) return null;
  const tokenParts = token.split('.');
  if (tokenParts.length < 2) return null;
  const payload = JSON.parse(atob(tokenParts[1]));
  if (!payload || !payload.exp) return null;
  return payload.exp * 1000; // Convert to milliseconds
};

// Check if token has expired on app load
export const isTokenExpired = () => {
  const expirationTime = getTokenExpirationTime(token);
  return expirationTime && expirationTime < Date.now();
};

// Create Redux Store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
  preloadedState: {
    auth: {
      isAuthenticated: !!token && !isTokenExpired(),
      // isAuthenticated: true,
      token: token,
      error: false,
      loading: false,
    },
  },
});
