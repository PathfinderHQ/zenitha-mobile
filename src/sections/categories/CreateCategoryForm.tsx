// react
import React, { FC, useEffect } from 'react';

// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { Button, FormProvider, Input } from '../../components';

// types
import { CategoryPayload } from '../../types';
import { useCategories } from '../../zustand';
import { useError } from '../../hooks';

const CreateCategoryForm: FC = () => {
    const { create, createCategory } = useCategories();

    const { loading, error, clearError } = create;

    const CreateCategorySchema = Yup.object().shape({
        name: Yup.string().required(),
    });

    const defaultValues = { name: '' };

    const methods = useForm<CategoryPayload>({
        resolver: yupResolver(CreateCategorySchema),
        defaultValues,
    });

    const { handleSubmit, reset } = methods;

    // handle error
    useError(error, clearError);

    // push user to home screen when the user is authenticated
    const onSubmit = async (data: CategoryPayload) => {
        createCategory(data);
        reset();
    };

    // reset form when done
    useEffect(() => {
        if (!loading) {
            reset();
        }

        // eslint-disable-next-line
    }, [loading]);

    return (
        <FormProvider methods={methods}>
            <Input name='name' placeholder='Personal' />
            <Button loading={loading} title='Save' onPress={handleSubmit(onSubmit)} />
        </FormProvider>
    );
};

export default CreateCategoryForm;
