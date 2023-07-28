import React, { createContext, FC, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// lib
import { getSession, isValidToken, setSession } from '../lib';

// hooks
import useError from '../hooks/useError';

// constants
import { AuthRoutes, navigationRef } from '../constants';

// types
import { IAuthSlice, RootStackParamList } from '../types';

// state
import { useAuthSlice } from '../zustand';

// ----------------------------------------------------------------------
const AuthContext = createContext<IAuthSlice | null>(null);

// ----------------------------------------------------------------------

interface Props {
    children: React.ReactNode | React.ReactElement;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

const AuthProvider: FC<Props> = ({ children }) => {
    const navigation = useNavigation<NavigationProp>();

    const store = useAuthSlice();

    const { auth, getCurrentUser } = store;

    const { error, clearError, setIsInitialized, token, loading, isInitialized } = auth;

    useEffect(() => {
        const initialize = async () => {
            // initialize application
            await setIsInitialized();

            const accessToken = await getSession();

            if (accessToken && isValidToken(accessToken)) {
                await setSession(accessToken);

                await getCurrentUser();
            } else {
                // delete the token from session since it is not valid
                await setSession();
            }
        };

        initialize();

        // eslint-disable-next-line
    }, []);

    // handle errors
    useError(error, clearError);

    useEffect(() => {
        const route = navigationRef.isReady() ? navigationRef.getCurrentRoute() : undefined;
        const authRoutes = Object.values(AuthRoutes) as string[];

        const currentRoute = route?.name || AuthRoutes.Splash;

        if (isInitialized && !loading && !token && !authRoutes.includes(currentRoute)) {
            navigation.navigate(AuthRoutes.Login);
        }

        // eslint-disable-next-line
    }, [token, isInitialized, loading]);

    return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
