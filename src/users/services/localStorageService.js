import { jwtDecode } from "jwt-decode";

const TOKEN = "my token";

// The setItem() will update the token in the localStorage, and if there isn't a token, then setItem() will create one.
export const setTokenInLocalStorage = (jwtToken) => {
  localStorage.setItem(TOKEN, jwtToken);
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);

export const getUser = () => {
  try {
    const myToken = getToken();
    return jwtDecode(myToken);
  } catch (err) {
    return null;
  }
};
