import axios from "axios";

const API = axios.create({
  baseURL: "https://task-management-system-grew.onrender.com/api/tasks"
});

export default API;