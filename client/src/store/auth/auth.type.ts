
export interface InitialAuthState {
    authorizationStatus: string;
}

export interface AuthState {
    auth: InitialAuthState;
}

export interface SingInData {
    email: string;
    password: string;
}

export interface SingUpData extends SingInData {
    name: string;
}
