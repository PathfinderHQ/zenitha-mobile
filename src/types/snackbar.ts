export interface ISnackbarSlice {
    visible: boolean;
    message: string | null;
    dismiss: () => void;
    show: () => void;
    setMessage: (value: string) => void;
    clearMessage: () => void;
}
