import React, { FC, useEffect } from 'react';

// form
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Button, FormProvider, Input } from '../../../components';
import { AuthRoutes, EMAIL_REGEX } from '../../../constants';
import { ForgotPasswordScreenProps } from '../../../screens/auth/ForgotPassword';
import { useAuth, useError, useMessage } from '../../../hooks';

interface IForgotPassword {
    email: string;
}

const ForgotPasswordForm: FC<ForgotPasswordScreenProps> = ({ navigation }) => {
    const { forgot, forgotPassword } = useAuth();

    const { loading, error, clearError, message, clearMessage, success } = forgot;

    const ForgotPasswordSchema = Yup.object().shape({
        email: Yup.string().matches(EMAIL_REGEX, 'Please enter a valid email').required('Email is required'),
    });

    const defaultValues = { email: '' };

    const methods = useForm<IForgotPassword>({
        resolver: yupResolver(ForgotPasswordSchema),
        defaultValues,
    });

    const { reset, handleSubmit } = methods;

    const onSubmit = async (data: IForgotPassword) => {
        forgotPassword(data.email);
    };

    // handle error
    useError(error, clearError);

    // handle message
    useMessage(message, clearMessage);

    useEffect(() => {
        // when error occurs, reset the input fields
        if (error) {
            reset();
        }

        // eslint-disable-next-line
    }, [error]);

    // push user to home screen when the user is authenticated
    useEffect(() => {
        if (success) {
            navigation.navigate(AuthRoutes.ResetOtp);
        }

        // eslint-disable-next-line
    }, [success]);

    return (
        <FormProvider methods={methods}>
            <Input name='email' placeholder='Email' />

            <Button loading={loading} title='Send' onPress={handleSubmit(onSubmit)} />
        </FormProvider>
    );
};

export default ForgotPasswordForm;
