import { useContext } from 'react';
import { SnackbarContext } from '../contexts/SnackbarContext';

// ----------------------------------------------------------------------

const useSnackbar = () => {
    const context = useContext(SnackbarContext);

    if (!context) throw new Error('Snackbar context must be use inside SnackbarProvider');

    return context;
};

export default useSnackbar;
