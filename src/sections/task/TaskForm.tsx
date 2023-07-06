import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Button,
    CategoryButton,
    FormProvider,
    IconButtonComponent,
    Input,
    Carousel,
    InputDatePicker,
    TimePicker,
} from '../../components';
import { CreateTaskPayload, RootStackParamList } from '../../types';
import { Routes } from '../../constants';

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

interface TaskFormProp {
    type: 'create' | 'edit';
}

const CreateTaskForm: FC<TaskFormProp> = ({ type }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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

    const onSubmit = () => navigation.navigate(Routes.ViewTodayTasks);

    return (
        <FormProvider methods={methods}>
            <View>
                <Text>Task Name</Text>
                <Input name='taskName' placeholder='' />
            </View>
            {/* -----date picker here */}
            <View>
                <Text>Date</Text>
                <InputDatePicker />
            </View>
            <View>
                <Text>Start Time</Text>
                <TimePicker />
                <Text>End Time</Text>
                <TimePicker />
            </View>
            <Text>Description</Text>
            <TextInput editable multiline numberOfLines={3} placeholder='add task description here' />
            <View style={styles.carouselContainer}>
                <Carousel>
                    {buttons.map(({ id, name, onPress, color }) => (
                        <CategoryButton key={id} onPress={onPress} name={name} color={color} />
                    ))}
                </Carousel>
                <IconButtonComponent
                    size={40}
                    icon='plus'
                    color='#252525'
                    onPress={() => navigation.navigate(Routes.CreateCategory)}
                />
            </View>
            <Button title={type === 'create' ? 'Create Task' : 'Edit Task'} onPress={handleSubmit(onSubmit)} />
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
