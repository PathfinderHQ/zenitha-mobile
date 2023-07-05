import React, { FC, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

// form
import * as Yup from 'yup';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyleSheet, Text } from 'react-native';

// components
import { Button, FormProvider, Input } from '../../components';

// types
import { UpdateProfilePayload } from '../../types';
import { useAuth, useError } from '../../hooks';

const UpdateProfileForm: FC = () => {
    const navigation = useNavigation();

    const { profile, updateProfile, auth } = useAuth();

    const { loading, success, error, clearError } = profile;

    const { user } = auth;

    const UpdateProfileSchema = Yup.object().shape({
        first_name: Yup.string().optional(),
        last_name: Yup.string().optional(),
    });

    const methods = useForm<UpdateProfilePayload>({
        resolver: yupResolver(UpdateProfileSchema),
        defaultValues: {
            first_name: user?.first_name,
            last_name: user?.last_name,
        },
    });

    const { handleSubmit, control } = methods;

    // handle error

    // push user to home screen when the user is authenticated
    const onSubmit = (data: UpdateProfilePayload) => {
        updateProfile(data);
    };

    // handle error
    useError(error, clearError);

    useEffect(() => {
        if (success) {
            navigation.goBack();
        }

        // eslint-disable-next-line
    }, [success]);

    // get current state of the input field
    const firstName = useWatch({ control, name: 'first_name' });
    const lastName = useWatch({ control, name: 'last_name' });

    const disabled = !firstName && !lastName;

    return (
        <FormProvider methods={methods}>
            <Text style={styles.title}>Update Profile</Text>
            <Input name='first_name' placeholder='First Name' />
            <Input name='last_name' placeholder='Last Name' />
            <Button loading={loading} title='Save' disabled={disabled} onPress={handleSubmit(onSubmit)} />
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
