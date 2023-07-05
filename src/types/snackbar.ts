export interface ISnackbarContext {
    visible: boolean;
    message: string;
    dismiss: () => void;
    show: () => void;
    setMessage: (value: string) => void;
    clearMessage: () => void;
}
