import axios from "axios";
import { apiUrl } from "./config.json";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    (error.response.status >= 400) & (error.response.status < 500);

  if (!expectedError) {
    console.log("Logging the error", error);
  }

  return Promise.reject(error);
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
};

const PetData = {
  list: () => requests.get(apiUrl),
};

export default {
  PetData,
};
