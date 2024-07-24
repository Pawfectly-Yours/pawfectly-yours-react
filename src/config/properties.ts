export const DEV_MODE: "development" | "production" = import.meta.env
  .VITE_DEV_MODE;
export const API_URL = process.env.REACT_API_URL || "http://localhost:5001/api";
export const API_KEY = process.env.REACT_API_KEY || "";
