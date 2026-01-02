let accessToken = null;
let expiresAt = null;
let authReady = false;

export const getAccessToken = () => accessToken;

export const isTokenExpired = () => {
    return !expiresAt || Date.now() > expiresAt;
};

export const setAccessToken = ({ access_token, expires_in }) => {
    accessToken = access_token;
    expiresAt = Date.now() + expires_in * 1000;
};

export const clearTokens = () => {
    accessToken = null;
    expiresAt = null;
};

export const markAuthReady = () => {
    authReady = true;
};

export const isAuthReady = () => authReady;
