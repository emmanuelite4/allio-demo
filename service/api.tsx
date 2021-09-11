import axiosService from "./axios_helper";
import { URI_TASK } from "./uri";
import { TimeProps } from "../util/types";

class ApiService {
  addTask(title: string) {
    return axiosService.post(URI_TASK, { title, from: null, to: null });
  }

  fetchTask() {
    return axiosService.get(URI_TASK);
  }

  deleteTask(id: string) {
    return axiosService.del(URI_TASK, id);
  }

  updateTask(id: string, time: TimeProps) {
    return axiosService.put(URI_TASK, id, { ...time });
  }
}

const apiService = new ApiService();

export default apiService;
