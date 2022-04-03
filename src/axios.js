import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://json.extendsclass.com",
});
export default axiosInstance;
