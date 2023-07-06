// react
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { Button, FormProvider, Input } from '../../components';
import Categories from './Categories';

// types
import { CreateCategoryPayload, Navigation } from '../../types';

const CreateCategoryForm: FC = () => {
    const navigation = useNavigation<Navigation>();

    const CreateCategorySchema = Yup.object().shape({
        category_name: Yup.string().required(),
    });

    const defaultValues = {
        category_name: '',
    };

    const methods = useForm<CreateCategoryPayload>({
        resolver: yupResolver(CreateCategorySchema),
        defaultValues,
    });

    const { handleSubmit } = methods;

    // handle error

    // push user to home screen when the user is authenticated
    const onSubmit = () => navigation.goBack();

    return (
        <FormProvider methods={methods}>
            <Text>Add Category</Text>
            <Input name='category_name' placeholder='Category Name' />
            <Text>All Categories</Text>
            <Categories type='view' />
            <Button title='Save' onPress={handleSubmit(onSubmit)} />
        </FormProvider>
    );
};

export default CreateCategoryForm;
