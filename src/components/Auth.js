const STORAGE_KEY = "mytoken";

const isAuthenticated = () => !!localStorage.getItem(STORAGE_KEY);
const login = (token) => localStorage.setItem(STORAGE_KEY, "Bearer " + token);

const logout = () => localStorage.removeItem(STORAGE_KEY);

export { isAuthenticated, login, logout, STORAGE_KEY };
