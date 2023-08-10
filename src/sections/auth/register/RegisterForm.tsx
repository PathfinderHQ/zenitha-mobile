import React, { FC, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { Button, FormProvider, Input } from '../../../components';

// types
import { AuthPayload, AuthType, RootStackParamList } from '../../../types';

// hooks
import { useError, useAuth } from '../../../hooks';
import { AuthRoutes, EMAIL_REGEX, PASSWORD_REGEX } from '../../../constants';

type SignUpFormProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.Register>;
};

const RegisterForm: FC<SignUpFormProps> = ({ navigation }) => {
    const { auth, registerOrLogin } = useAuth();

    const { loading, error, clearError, isAuthenticated } = auth;

    const RegisterSchema = Yup.object().shape({
        email: Yup.string().matches(EMAIL_REGEX, 'Please enter a valid email').required('Email is required'),
        password: Yup.string()
            .matches(
                PASSWORD_REGEX,
                'Password should be minimum of 8 characters\n1 Uppercase letter\n1 lower case\n1 number\n1 special character',
            )
            .required('Password is required'),
    });

    const defaultValues = {
        email: '',
        password: '',
    };

    const methods = useForm<AuthPayload>({
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    });

    const { reset, handleSubmit } = methods;

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
            navigation.navigate(AuthRoutes.Verify);

            // reset form
            reset();
        }

        // eslint-disable-next-line
    }, [isAuthenticated]);

    const onSubmit = (data: AuthPayload) => {
        registerOrLogin(data, AuthType.REGISTER);
    };

    return (
        <FormProvider methods={methods}>
            <Input name='email' placeholder='Email' />
            <Input name='password' placeholder='Password' secureTextEntry />
            <Button loading={loading} title='Register' onPress={handleSubmit(onSubmit)} />
        </FormProvider>
    );
};

export default RegisterForm;
