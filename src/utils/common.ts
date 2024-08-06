import apiClient from "../services/apiClient";

// Logout
const logOut = async (token: string | null) => {
    return await apiClient.delete("/api/blacklist", { data: { token: token } });
}

// Check token expiry
const checkTokenExpiry = async (token: string | null) => {
    if (token) {
        return await apiClient.get("/api/blacklist", { headers: { "auth-token": localStorage.getItem("auth-token") } });
    }
};

export { logOut, checkTokenExpiry };