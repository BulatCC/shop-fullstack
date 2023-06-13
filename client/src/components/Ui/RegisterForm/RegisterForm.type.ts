export interface RegisterFormProps {
    classMod?: string;
    onChangeShow?: () => void;
}

export interface RegisterFormFields {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}
