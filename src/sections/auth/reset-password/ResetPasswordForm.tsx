import React, { FC, useEffect } from 'react';

// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, FormProvider, Input } from '../../../components';
import { AuthRoutes, PASSWORD_REGEX } from '../../../constants';
import { useAuth, useError, useMessage } from '../../../hooks';
import { ResetPasswordScreenProps } from '../../../screens/auth/ResetPassword';

interface IResetPasswordSchema {
    password: string;
    confirm_password: string;
}

const ResetPasswordForm: FC<ResetPasswordScreenProps> = ({ navigation }) => {
    const { reset, resetPassword } = useAuth();

    const { otp, loading, error, clearError, message, clearMessage, success } = reset;

    const ResetPasswordSchema = Yup.object().shape({
        password: Yup.string()
            .matches(
                PASSWORD_REGEX,
                'Password should be minimum of 8 characters\n1 Uppercase letter\n1 lower case\n1 number\n1 special character',
            )
            .required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required(),
    });

    const defaultValues = { password: '', confirmPassword: '' };

    const methods = useForm<IResetPasswordSchema>({
        resolver: yupResolver(ResetPasswordSchema),
        defaultValues,
    });

    const { reset: formReset, handleSubmit } = methods;

    const onSubmit = async (data: IResetPasswordSchema) => {
        resetPassword(otp, data.password);
    };

    // handle error
    useError(error, clearError);

    // handle message
    useMessage(message, clearMessage);

    useEffect(() => {
        // when error occurs, reset the input fields
        if (error) {
            formReset();
        }

        // eslint-disable-next-line
    }, [error]);

    // push user to home screen when the user is authenticated
    useEffect(() => {
        if (success) {
            navigation.navigate(AuthRoutes.Login);
        }

        // eslint-disable-next-line
    }, [success]);

    return (
        <FormProvider methods={methods}>
            <Input name='password' placeholder='New Password' secureTextEntry />
            <Input name='confirm_password' placeholder='Confirm Password' secureTextEntry />

            <Button loading={loading} title='Reset' onPress={handleSubmit(onSubmit)} />
        </FormProvider>
    );
};

export default ResetPasswordForm;
