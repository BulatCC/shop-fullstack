import { ApiRoute } from '../../constants';
import { AuthUser, RegisterUser } from './api.type';
import { authLocalStorage } from '../localStorage/authLocalStorage/authLocalStorage';
import { httpServiceDefault } from './api';

const authApi = {
    singUp: async ({ email, password, name }: RegisterUser) => {
        const { data } = await httpServiceDefault.post(ApiRoute.SingUp, {
            email,
            password,
            name
        });
        return data;
    },
    singIn: async ({ email, password }: AuthUser) => {
        const { data } = await httpServiceDefault.post(ApiRoute.SingInWithPassword, {
            email,
            password
        });
        return data;
    },
    refresh: async () => {
        const { data } = await httpServiceDefault.post(ApiRoute.Token, {
            grant_type: 'refresh_token',
            refreshToken: authLocalStorage.getRefreshToken()
        });
        return data;
    }
};

export { authApi };
