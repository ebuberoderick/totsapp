import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const Appregister = (formData) => apiWithOutAuth.post("/register", formData).then(getApiResponse).catch(getErrorResponse);
export const Applogin = (formData) => apiWithOutAuth.post("/login", formData).then(getApiResponse).catch(getErrorResponse);
export const Appforgotten = (formData) => apiWithOutAuth.post("/recover/send_otp", formData).then(getApiResponse).catch(getErrorResponse);
export const AppVerifyOtp = (formData) => apiWithOutAuth.post("/recover/verify_otp", formData).then(getApiResponse).catch(getErrorResponse);
export const AppNewPassword = (formData) => apiWithOutAuth.post("/recover/create_new_password", formData).then(getApiResponse).catch(getErrorResponse);



export const fetchPrefrence = () => apiWithAuth.post("/app/onboarding/fetch_app_preference").then(getApiResponse).catch(getErrorResponse);
export const updateUserPrefrence = (formData) => apiWithAuth.post("/app/onboarding/update_user_preference", formData).then(getApiResponse).catch(getErrorResponse);


