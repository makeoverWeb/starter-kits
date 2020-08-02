import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants';

const getUserToken = () => {
  return new URLSearchParams(window.location.search).get('token');
};

export const request = (
  path: string,
  method: string,
  data?: any,
  params?: any
): Promise<AxiosResponse> =>
  axios({
    baseURL: `${API_URL}/${path}`,
    method,
    data,
    params: params && params,
    headers: {
      authorization: `Bearer ${getUserToken()}`
    }
  });
