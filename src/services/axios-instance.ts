import { API_KEY, API_URL, DEV_MODE } from "@/config";
import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    "x-api-secret": API_KEY,
    "x-Frame-Options": "DENY",
    "Content-Security-Policy": "frame-ancestors 'self'",
  },
});

axiosInstance.interceptors.request.use((request) => {
  // TODO:: for bearer token implementation
  //   if (localStorage.root) {
  //     const authStore = JSON.parse(localStorage.root).authStore;
  //     const token = authStore.accessToken;
  //     const isLogin: boolean = false;
  //     if (token && isLogin) {
  //       request.headers["Authorization"] = `Bearer ${token}`;
  //     }
  //   }

  // Microservice devmode reroute
  if (DEV_MODE === "development") {
    if (request.url?.includes("auth")) {
      console.log("auth mani");

      request.baseURL = "http://localhost:5001/api";
    } else if (request.url?.includes("admin")) {
      console.log("recach");

      request.baseURL = "http://localhost:5002/api/";
    } else if (request.url?.includes("vet-management")) {
      request.baseURL = "http://localhost:5003/api/";
    } else if (request.url?.includes("vet-tracker")) {
      request.baseURL = "http://localhost:5004/api/";
    } else if (request.url?.includes("pet-adoption")) {
      request.baseURL = "http://localhost:5004/api/";
    }
  }

  return request;
});
