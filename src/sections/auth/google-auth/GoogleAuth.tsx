import React, { FC, useEffect } from 'react';
import { google, Routes } from '../../../constants';
import { Button } from '../../../components';
import { useAuth, useError, useGoogleAuth } from '../../../hooks';
import { AuthType } from '../../../types';
import { RegisterScreenProps } from '../../../screens/auth/Register';
import { LoginScreenProps } from '../../../screens/auth/Login';

type GoogleAuthProps = RegisterScreenProps | LoginScreenProps;

const GoogleAuth: FC<GoogleAuthProps> = ({ navigation }) => {
    const { promptAsync, token, request } = useGoogleAuth();

    const { auth, registerOrLogin } = useAuth();

    const { loading, error, clearError, isAuthenticated } = auth;

    useEffect(() => {
        if (token.length > 0) {
            registerOrLogin({ token }, AuthType.GOOGLE);
        }

        // eslint-disable-next-line
    }, [token]);

    // handle error
    useError(error, clearError);

    // push user to home screen when the user is authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate(Routes.Dashboard);
        }

        // eslint-disable-next-line
    }, [isAuthenticated]);

    return (
        <Button
            disabled={!request}
            loading={loading}
            icon={google.link}
            title='Continue with Google'
            onPress={promptAsync}
        />
    );
};

export default GoogleAuth;
