import apiClient from "../services/apiClient";

// API for logging out
const logOut = async () => {
    return await apiClient.delete("/api/blacklist", { data: { token: localStorage.getItem("auth-token") } });
}

const signOut = async () => {
  await logOut().then(() => {
      location.href = "/";
  });
}

// API to check token expiry
const checkTokenExpiry = async () => {
    return apiClient.get("/api/blacklist", { headers: { "auth-token": localStorage.getItem("auth-token") } })
        .then(() => { return false }).catch(() => { return true });
};

const expiry = async () => {
  return await checkTokenExpiry();
}

export { expiry, signOut };