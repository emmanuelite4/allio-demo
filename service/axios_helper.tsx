import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

class AxiosService {
  get(uri: string) {
    return axiosApi.get(uri);
  }

  post(uri: string, data = {}) {
    return axiosApi.post(uri, { ...data });
  }

  put(uri: string, id: string, data = {}) {
    return axiosApi.put(`${uri}/${id}`, { ...data });
  }

  del(uri: string, config = {}) {
    return axiosApi.delete(`${uri}/${config}`);
  }
}

let axiosService = new AxiosService();

export default axiosService;
