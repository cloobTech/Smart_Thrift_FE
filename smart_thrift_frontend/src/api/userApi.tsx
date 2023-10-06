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
