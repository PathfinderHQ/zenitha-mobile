import React, { FC, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { Button, FormProvider, Input } from '../../../components';

import { ChangePasswordPayload } from '../../../types';
import { PASSWORD_REGEX } from '../../../constants';
import { useAuth, useError, useMessage } from '../../../hooks';

const ChangePasswordForm: FC = () => {
    const { goBack } = useNavigation();

    const { change, changePassword } = useAuth();

    const { loading, error, clearError, message, clearMessage, success } = change;

    const ChangePasswordSchema = Yup.object().shape({
        password: Yup.string().required('Password is required'),
        new_password: Yup.string()
            .matches(
                PASSWORD_REGEX,
                'Password should be minimum of 8 characters\n1 Uppercase letter\n1 lower case\n1 number\n1 special character',
            )
            .required('New password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('new_password')], 'New password must match')
            .required(),
    });

    const defaultValues = {
        password: '',
        new_password: '',
        confirm_password: '',
    };

    const methods = useForm<ChangePasswordPayload>({
        resolver: yupResolver(ChangePasswordSchema),
        defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data: ChangePasswordPayload) => {
        changePassword(data);
    };

    // handle error
    useError(error, clearError);

    // handle message
    useMessage(message, clearMessage);

    // push user to home screen when the user is authenticated
    useEffect(() => {
        if (success) {
            goBack();
        }

        // eslint-disable-next-line
    }, [success]);

    return (
        <FormProvider methods={methods}>
            <Text style={styles.title}>Change Password</Text>

            <Input name='password' placeholder='Current Password' secureTextEntry />
            <Input name='new_password' placeholder='New Password' secureTextEntry />
            <Input name='confirm_password' placeholder='Confirm Password' secureTextEntry />
            <Button loading={loading} title='Change Password' onPress={handleSubmit(onSubmit)} />
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
