import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View } from 'react-native';
// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CategoryButton, FormProvider, HorizontalDivider, Input } from '../../components';
import { CreateCategoryPayload } from '../../types';

const CreateCategoryForm: FC = () => {
    const navigation = useNavigation();

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
    const buttons = [
        { id: 1, name: 'HOME', onPress: () => console.log('Pressed button 1'), color: 'red' },
        { id: 2, name: 'WORK', onPress: () => console.log('Pressed button 2'), color: 'blue' },
        { id: 3, name: 'FAMILY', onPress: () => console.log('Pressed button 3'), color: 'green' },
        { id: 4, name: 'PERSONAL', onPress: () => console.log('Pressed button 4'), color: 'yellow' },
        { id: 5, name: 'PLAY', onPress: () => console.log('Pressed button 5'), color: 'purple' },
    ];
    const { handleSubmit } = methods;

    // handle error

    // push user to home screen when the user is authenticated
    const onSubmit = () => navigation.goBack();

    return (
        <FormProvider methods={methods}>
            <Text>Add Category</Text>
            <Input name='category_name' placeholder='Category Name' />
            <Text>All Categories</Text>
            <View style={styles.categorys}>
                {buttons.map(({ id, name, onPress, color }) => (
                    <CategoryButton key={id} onPress={onPress} name={name} color={color} />
                ))}
            </View>
            <Button title='Save' onPress={handleSubmit(onSubmit)} />
        </FormProvider>
    );
};

const styles = StyleSheet.create({
    categorys: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default CreateCategoryForm;
