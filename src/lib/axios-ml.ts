import axios from "axios";

const apiMl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ML_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export { apiMl };
