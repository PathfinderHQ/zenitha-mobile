// react
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { Button, FormProvider, Input, InputDatePicker, TimePicker } from '../../components';
import { Categories } from '../categories';

// types
import { CreateTaskPayload, Navigation } from '../../types';
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
    const navigation = useNavigation<Navigation>();

    const methods = useForm<CreateTaskPayload>({
        resolver: yupResolver(CreateTaskSchema),
        defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = () => navigation.navigate(Routes.ViewTodayTasks);

    return (
        <FormProvider methods={methods}>
            <View style={styles.flex}>
                <View style={styles.flex}>
                    <Text>Task Name</Text>
                    <Input name='taskName' placeholder='' />
                </View>
                <View style={styles.flex}>
                    <Text>Date</Text>
                    <InputDatePicker />
                </View>
                <View style={[styles.flex, styles.timeContainer]}>
                    <Text>Start Time</Text>
                    <TimePicker />
                    <Text>End Time</Text>
                    <TimePicker />
                </View>
                <View style={styles.flex}>
                    <Text>Description</Text>
                    <TextInput editable multiline numberOfLines={3} placeholder='add task description here' />
                </View>
                <Categories type='select' />
                <Button title={type === 'create' ? 'Create Task' : 'Edit Task'} onPress={handleSubmit(onSubmit)} />
            </View>
        </FormProvider>
    );
};

export default CreateTaskForm;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    timeContainer: {
        flexDirection: 'row',
    },
});
