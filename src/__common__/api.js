import axios from 'axios';

export const API_URL = process.env.API_URL;
export const TOKEN = process.env.TOKEN;

export const authHeaders = {
  Authorization: `Bearer ${TOKEN}`
};

const api = {
  async get(url, queryParams = {}) {
    const response = await axios.get(API_URL + url, {
      params: queryParams,
      headers: {
        ...authHeaders
      }
    });
    return response.data.data;
  }
};

export default api;

//api.get('/folders')
// axios.get('https://my-api.com/folders')
