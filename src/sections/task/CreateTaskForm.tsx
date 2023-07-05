import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CategoryButton, FormProvider, IconButtonComponent, Input, Carousel } from '../../components';
import { CreateTaskPayload } from '../../types';

const CreateTaskSchema = Yup.object().shape({
    taskName: Yup.string().required(),
    date: Yup.date().required(),
    startTime: Yup.date().required(),
    dueTime: Yup.date().required(),
    description: Yup.string().required(),
});

const defaultValues = {
    taskName: '',
    date: undefined,
    startTime: undefined,
    dueTime: undefined,
    description: '',
};

const CreateTaskForm: FC = () => {
    const navigator = useNavigation();

    const methods = useForm<CreateTaskPayload>({
        resolver: yupResolver(CreateTaskSchema),
        defaultValues,
    });

    const buttons = [
        { id: 1, name: 'HOME', onPress: () => console.log('Pressed button 1'), color: 'red' },
        { id: 2, name: 'WORK', onPress: () => console.log('Pressed button 2'), color: 'blue' },
        { id: 3, name: 'FAMILY', onPress: () => console.log('Pressed button 3'), color: 'green' },
        { id: 4, name: 'PERSONAL', onPress: () => console.log('Pressed button 4'), color: 'yellow' },
        { id: 5, name: 'PLAY', onPress: () => console.log('Pressed button 5'), color: 'purple' },
    ];

    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleButtonPress = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
        console.log(`Pressed button ${buttonIndex + 1}`);
    };
    const { handleSubmit } = methods;

    const onSubmit = () => navigator.goBack();

    return (
        <FormProvider methods={methods}>
            <Text>Task Name</Text>
            <Input name='taskName' placeholder='' />
            {/* -----date picker here */}
            <Input name='date' placeholder='' />
            <Input name='startTime' placeholder='' />
            <Input name='dueTime' placeholder='' />
            {/* text input here */}
            <Text>Description</Text>
            <TextInput editable multiline numberOfLines={3} placeholder='add task description here' />
            <View style={styles.carouselContainer}>
                <Carousel>
                    {buttons.map(({ id, name, onPress, color }) => (
                        <CategoryButton key={id} onPress={onPress} name={name} color={color} />
                    ))}
                </Carousel>
                <IconButtonComponent size={40} icon='plus' color='#252525' />
            </View>
            <Button title='Create Task' onPress={handleSubmit(onSubmit)} />
        </FormProvider>
    );
};

export default CreateTaskForm;

const styles = StyleSheet.create({
    carouselContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
});
