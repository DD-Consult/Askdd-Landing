import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API}/contact`, formData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with error
      throw new Error(error.response.data.detail || 'Failed to submit form');
    } else if (error.request) {
      // Request made but no response
      throw new Error('Unable to reach server. Please try again later.');
    } else {
      // Something else happened
      throw new Error('An unexpected error occurred');
    }
  }
};