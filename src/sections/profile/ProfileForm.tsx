import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormProvider, Input } from '../../components';
import { UpdateProfilePayload } from '../../types';

const UpdateProfileForm: FC = () => {
    const navigator = useNavigation();

    const UpdateProfileSchema = Yup.object().shape({
        first_name: Yup.string().required(),
        last_name: Yup.string().required(),
    });

    const defaultValues = {
        first_name: '',
        last_name: '',
    };

    const methods = useForm<UpdateProfilePayload>({
        resolver: yupResolver(UpdateProfileSchema),
        defaultValues,
    });

    const { handleSubmit } = methods;

    // handle error

    // push user to home screen when the user is authenticated
    const onSubmit = () => navigator.goBack();

    return (
        <FormProvider methods={methods}>
            <Input name='first_name' placeholder='First Name' />
            <Input name='last_name' placeholder='Last Name' />
            <Button title='Save' onPress={handleSubmit(onSubmit)} />
        </FormProvider>
    );
};

export default UpdateProfileForm;

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
});
