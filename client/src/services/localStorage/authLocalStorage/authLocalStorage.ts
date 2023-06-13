import { KeyNameAuth } from '../../../constants';
import { Tokens } from './authLocalStorage.type';

const setTokens = ({ refreshToken, accessToken, userId, expiresIn = 3600 }: Tokens): void => {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(KeyNameAuth.TokenKey, accessToken);
    localStorage.setItem(KeyNameAuth.RefreshKey, refreshToken);
    localStorage.setItem(KeyNameAuth.ExpiresKey, expiresDate.toString());
    localStorage.setItem(KeyNameAuth.UserIdKey, userId);
};

const removeAuthData = (): void => {
    localStorage.removeItem(KeyNameAuth.UserIdKey);
    localStorage.removeItem(KeyNameAuth.TokenKey);
    localStorage.removeItem(KeyNameAuth.RefreshKey);
    localStorage.removeItem(KeyNameAuth.ExpiresKey);
};

const getAccessToken = (): string | null => localStorage.getItem(KeyNameAuth.TokenKey);
const getRefreshToken = (): string | null => localStorage.getItem(KeyNameAuth.RefreshKey);
const getExpiresTokenDate = (): string | null => localStorage.getItem(KeyNameAuth.ExpiresKey);
const getUserId = (): string | null => localStorage.getItem(KeyNameAuth.UserIdKey);

export const authLocalStorage = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getExpiresTokenDate,
    getUserId,
    removeAuthData
};
