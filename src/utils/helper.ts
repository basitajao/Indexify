export const getAuthToken = () => {
  return localStorage.getItem("user:token");
};
export const getUser = () => {
  return localStorage.getItem("isAuthenticated");
};

export const setAuthToken = (token: string) =>
  localStorage.setItem("user:token", token);
export const setIsAuthenticated = (data: string) =>
  localStorage.setItem("isAuthenticated", data);
