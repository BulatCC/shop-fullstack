export interface RegisterFormProps {
    classMod?: string;
    onChangeShow?: () => void;
}

export interface RegisterFormFields {
    email: string;
    password: string;
    confirm_password: string;
}
