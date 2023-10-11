import axios from 'axios';
import { BASE_URL } from './authApi';
import { toast } from 'react-toastify';

// Fetch all users profile with query parameters
export const fetchUsersApi = async (
  token: any,
  page: any,
  pageSize: any,
  column: string | null = null,
  search_string: string | null = null
) => {
  try {
    const params = new URLSearchParams();

    // Add the pagination parameters
    params.append('page', page);
    params.append('page_size', pageSize);

    // Add the optional query parameters if provided
    if (column) {
      params.append('column', column);
    }
    if (search_string) {
      params.append('search_string', search_string);
    }

    const response = await axios.get(
      `${BASE_URL}/profile?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error: any) {
    if (error.response.status === 401) {
      toast.error('Unauthorized Access');
    }

    throw error;
  }
};

// Fetch one user's profile
export const fetchUserApi = async (token: string, id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error: any) {
    if (error.response.status === 401) {
      toast.error('Unauthorized Access');
    } else if (error.response === 404) {
      toast.error('User not found');
    }
    throw error;
  }
};

// Create/Add New User
export const newUserApi = async (token: string, value: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, value, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      toast.success('New Member Successfully Created');
    }

    return response;
  } catch (error: any) {
    if (error.response.status === 409) {
      toast.error('Email already exist');
    }
    if (error.response.status === 401) {
      toast.error('Unauthorized Access');
    } else {
      toast.error(error);
    }
    console.log(error);
    throw error;
  }
};

// Delete a user's profile
export const deleteUserApi = async (token: string | any, id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const res = response.request.responseURL.split('/');
    const userId = res[res.length - 1];
    toast.success('User Deleted');

    return userId;
  } catch (error: any) {
    if (error.response.status === 401) {
      toast.error('Unauthorized Access');
    } else if (error.response === 404) {
      toast.error('User not found');
    }
    throw error;
  }
};

// Update a user's profile
export const updateUserApi = async (
  token: string | any,
  value: object | any,

  id: string
) => {
  try {
    const response = await axios.put(`${BASE_URL}/profile/${id}`, value, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success('User Details Updated');

    return response;
  } catch (error: any) {
    if (error.response.status === 401) {
      toast.error('Unauthorized Access');
    } else if (error.response === 404) {
      toast.error('User not found');
    }
    throw error;
  }
};
