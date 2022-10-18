import CONSTANTS from "../constants";

export const getToken = (tokenName) => {
  return localStorage.getItem(tokenName);
};

export const removeTokens = () => {
  localStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
  localStorage.removeItem(CONSTANTS.REFRESH_TOKEN);
};

export const setToken = (tokenName, val) => {
  localStorage.setItem(tokenName, val);
};

