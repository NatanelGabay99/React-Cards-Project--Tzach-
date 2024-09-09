import { jwtDecode } from "jwt-decode";
const TOKEN = import.meta.env.VITE_TOKEN;

export const setTokenInLocalStorage = (encryptedToken) =>
  localStorage.setItem(TOKEN, encryptedToken);

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);

export const getUser = () => {
  try {
    const user = localStorage.getItem(TOKEN);
    const userDetails = jwtDecode(user);
    userDetails.isBusiness = userDetails.isBusiness === "true";
    userDetails.isAdmin = userDetails.isAdmin === "true";

    return jwtDecode(user);
  } catch (error) {
    return null;
  }
};

