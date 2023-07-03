import React, { FC, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormProvider, Input } from '../../../components';

import { AuthPayload, AuthType } from '../../../types';
import { EMAIL_REGEX, Routes } from '../../../constants';
import { useAuth, useError } from '../../../hooks';
import { LoginScreenProps } from '../../../screens/Login';

const ChangePasswordForm: FC<LoginScreenProps> = ({ navigation }) => {
    const { auth, registerOrLogin } = useAuth();

    const { loading, error, clearError, isAuthenticated } = auth;

    const LoginSchema = Yup.object().shape({
        email: Yup.string().matches(EMAIL_REGEX, 'Please enter a valid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const defaultValues = {
        email: '',
        password: '',
    };

    const methods = useForm<AuthPayload>({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const { reset, handleSubmit } = methods;

    const onSubmit = async (data: AuthPayload) => {
        registerOrLogin(data, AuthType.LOGIN);
    };

    // handle error
    useError(error, clearError);

    useEffect(() => {
        // when error occurs, reset the input fields
        if (error) {
            reset();
        }

        // eslint-disable-next-line
    }, [error]);

    // push user to home screen when the user is authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate(Routes.Homepage);
        }

        // eslint-disable-next-line
    }, [isAuthenticated]);

    return (
        <FormProvider methods={methods}>
            <Text style={styles.title}>Login</Text>

            <Input name='password' placeholder='Old Password' secureTextEntry />
            <Input name='newPassword' placeholder='New Password' secureTextEntry />
            <Button loading={loading} title='Login' onPress={handleSubmit(onSubmit)} />
        </FormProvider>
    );
};

export default ChangePasswordForm;

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
});
