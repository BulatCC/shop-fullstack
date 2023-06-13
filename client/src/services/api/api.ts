import axios from 'axios';
import configFile from '../../config.json';
import { authLocalStorage } from '../localStorage/authLocalStorage/authLocalStorage';
import { authApi } from './auth.api';
import { CustomAxiosRequestHeaders } from './api.type';

const httpDefault = axios.create({
    baseURL: configFile.apiEndpoint
});

const http = axios.create({
    baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(async (config) => {
    const expiresDate = authLocalStorage.getExpiresTokenDate() ?? '';
    const refreshToken = authLocalStorage.getRefreshToken();
    const isExpired = refreshToken && +expiresDate < Date.now();

    if (isExpired) {
        const data = await authApi.refresh();
        authLocalStorage.setTokens(data);
    }
    const accessToken = authLocalStorage.getAccessToken();
    if (accessToken) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`
        } as CustomAxiosRequestHeaders;
    }
    return config;
});
export const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
};

export const httpServiceDefault = {
    get: httpDefault.get,
    post: httpDefault.post
};
