import { useEffect } from 'react';
import { useSnackbar } from '../zustand';

const useError = (error: string | null, errorHandler: () => void) => {
    const { show, setMessage } = useSnackbar();

    useEffect(() => {
        if (error) {
            setMessage(error);
            show();
            errorHandler();
        }

        // eslint-disable-next-line
    }, [error]);
};

export default useError;
