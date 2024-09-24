import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

const AxiosApiHelper = (baseURL, headers, timeout = 10000) => {

  const axiosInstance = axios.create({
    baseURL: baseURL, 
    timeout: timeout,
    headers: headers
  });

  const get = async (url, params = {}, config = {}) => {
    try {
      const response = await axiosInstance.get(url, { params, ...config });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const post = async (url, data = {}, config = {}) => {
    try {
      const response = await axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const put = async (url, data = {}, config = {}) => {
    try {
      const response = await axiosInstance.put(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const del = async (url, config = {}) => {
    try {
      const response = await axiosInstance.delete(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    get,
    post,
    put,
    delete: del,
  };
};

export default AxiosApiHelper;
