import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

export const getAllProductsAPI = () => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.get(`/products`).then(({ data }) => {
    return data;
  });
};
