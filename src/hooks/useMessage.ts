import { useEffect } from 'react';
import { useSnackbar } from '../zustand';

const useMessage = (message: string | null, messageHandler: () => void) => {
    const { show, setMessage } = useSnackbar();

    useEffect(() => {
        if (message) {
            setMessage(message);
            show();
            messageHandler();
        }

        // eslint-disable-next-line
    }, [message]);
};

export default useMessage;
