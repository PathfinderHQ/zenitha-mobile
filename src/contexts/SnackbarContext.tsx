import React, { createContext, FC, useState } from 'react';
import { ISnackbarContext } from '../types';

// ----------------------------------------------------------------------
const SnackbarContext = createContext<ISnackbarContext | null>(null);

// ----------------------------------------------------------------------

interface Props {
    children: React.ReactNode | React.ReactElement;
}

const SnackbarProvider: FC<Props> = ({ children }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const dismiss = () => {
        setVisible(false);
        clearMessage();
    };

    const show = () => setVisible(true);

    const clearMessage = () => setMessage('');

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <SnackbarContext.Provider value={{ message, visible, dismiss, show, setMessage, clearMessage }}>
            {children}
        </SnackbarContext.Provider>
    );
};

export { SnackbarContext, SnackbarProvider };
