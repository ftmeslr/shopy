import axios from "axios";
import ValidationError from "../exceptions/validationError";

const callApi = () => {
  const axiosInstanse = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  axiosInstanse.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => Promise.reject(err)
  );

  axiosInstanse.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      const res = err?.response;
      if (res) {
        if (res.status === 422) {
          throw new ValidationError(res.data.errors);
        }
      }
      Promise.reject(err);
    }
  );

  return axiosInstanse;
};

export default callApi;
