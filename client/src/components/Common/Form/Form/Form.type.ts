export interface FormWrapperProps {
    children: JSX.Element[] | JSX.Element;
    onSubmit?: () => Promise<void>;
    classMod?: string;
}
