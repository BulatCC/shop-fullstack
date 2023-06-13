import { createSlice } from '@reduxjs/toolkit';
import { InitialAuthState, AuthState, SingUpData, SingInData } from './auth.type';
import { AuthorizationStatus } from '../../constants';
import { authApi } from '../../services/api/auth.api';
import { AppDispatch } from '../createStore';
import { authLocalStorage } from '../../services/localStorage/authLocalStorage/authLocalStorage';
import { toast } from 'react-toastify';

const initialState: InitialAuthState = {
    authorizationStatus: AuthorizationStatus.NoAuth
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthorizationStatus: (state, action) => {
            state.authorizationStatus = action.payload;
        }
    }
});

export const { reducer: authReducer, actions } = AuthSlice;
export const { setAuthorizationStatus } = actions;
export const getAuthorizationStatus = () => (state: AuthState): string => state.auth.authorizationStatus;

export const singUp = (registerData: SingUpData) => async (dispatch: AppDispatch): Promise<void> => {
    await authApi.singUp(registerData)
        .then(response => {
            authLocalStorage.setTokens(response);
            dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        })
        .catch(error => {
            console.log(error);
            toast.error(error.response.data.message);
        });
};

export const singIn = (registerData: SingInData) => async (dispatch: AppDispatch): Promise<void> => {
    await authApi.singIn(registerData)
        .then(response => {
            authLocalStorage.setTokens(response);
            dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        })
        .catch(error => {
            console.log(error);
            toast.error(error.response.data.message);
        });
};

export const checkAuth = () => async (dispatch: AppDispatch): Promise<void> => {
    await authApi.refresh()
        .then(response => {
            dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        })
        .catch(error => {
            console.log(error);
        });
};
