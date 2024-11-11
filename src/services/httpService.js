import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const API_BASE_URL = process.env.EXPO_PUBLIC_BASE_API_URL || "";
export const TOKEN =  `Bearer ${AsyncStorage.getItem("APPTOKEN")}`


const timeoutConfig = {
  timeout: 30000,
  timeoutErrorMessage: "Server taking too long to respond. Try again.",
};

export const apiWithOutAuth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  onUploadProgress: progressEvent => console.log(progressEvent.loaded),
  ...timeoutConfig,
});

export const apiWithAuth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: TOKEN,
  },
  ...timeoutConfig,
});

export const getApiResponse = (data) => {
  return {
    status: true,
    data: data.data,
  };
};

export const getErrorResponse = (error) => {
  if (error.response.status === 401) {
    
  }
  
  return {
    status: false,
    data: error?.response?.data,
  };
};
