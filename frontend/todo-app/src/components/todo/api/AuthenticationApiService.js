import { apiClient } from "./ApiClient";

export const executeBasicAuthService = 
(token) => apiClient.get(`/basicauth`, {
    headers: {
        Authorization: token
    }
})

export const executejwtAuthService = 
(username, password) => 
    apiClient.post(`/authenticate`, {username, password})