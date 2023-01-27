import axios from "axios";

const callApi = () => {
  const axiosInstanse = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  axiosInstanse.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => promise.reject(err)
  );

  axiosInstanse.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => Promise.reject(err)
  );

  return axiosInstanse;
};

export default callApi;
