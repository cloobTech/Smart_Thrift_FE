import axios from 'axios';
import { toast } from 'react-toastify';

export const BASE_URL = 'http://localhost:8000';

export interface Credentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  token_type: string;
}

// Handle User login
export const loginUserApi = async (cred: Credentials) => {
  try {
    const response = await axios.post<LoginResponse>(`${BASE_URL}/auth`, cred);
    return response;
  } catch (error: any) {
    toast.error(error.message);
    throw error;
  }
};
