export const setUser = (user) => {
  if (!user || !user.email) return; // ❌ prevent bad data
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const logout = () => {
  localStorage.removeItem("user");
};