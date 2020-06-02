export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SHOW = "SHOW";

export const login = (user) => ({
  type: LOGIN,
  user,
});

export const toggleTodo = () => ({
  type: LOGOUT,
});
