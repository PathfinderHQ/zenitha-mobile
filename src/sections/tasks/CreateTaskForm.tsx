// react
import React, { FC, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// date
import dayjs from 'dayjs';

// components
import { ScrollView } from 'react-native-gesture-handler';
import { Button, FormProvider, Input, InputDatePicker, TimePicker } from '../../components';
import { Categories } from '../categories';

// types
import { Navigation, TaskData, TaskPayload } from '../../types';
import { Routes } from '../../constants';
import { useCategories, useSnackbar, useTasks } from '../../zustand';
import { useError } from '../../hooks';

const CreateTaskForm: FC = () => {
    const navigation = useNavigation<Navigation>();

    const { show, setMessage } = useSnackbar();

    const { create, createTask, task: currentTask } = useTasks();

    const { category } = useCategories();

    const { loading, error, clearError, success, clearSuccess } = create;

    const [isTimePickerVisible, setIsTimePickerVisible] = useState<boolean>(false);
    const [time, setTime] = useState<string>('');

    const CreateTaskSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        date: Yup.date().required('Date is required'),
    });

    const defaultValues = {
        title: '',
        description: '',
        date: new Date(),
    };

    const methods = useForm<TaskData>({
        resolver: yupResolver(CreateTaskSchema),
        defaultValues,
    });

    const { handleSubmit, reset } = methods;

    const onOpen = () => setIsTimePickerVisible(true);
    const onDismiss = () => setIsTimePickerVisible(false);

    const onConfirm = (data: { hours: number; minutes: number }) => {
        setTime(`${data.hours}:${data.minutes}`);
        onDismiss();
    };

    const onSubmit = (data: TaskData) => {
        if (time === '') {
            setMessage('Please choose a time');
            show();

            return;
        }

        const payload: TaskPayload = {
            title: data.title,
            description: data.description,
        };

        // add category
        if (category.current) {
            // eslint-disable-next-line no-param-reassign
            payload.category = category.current;
        }

        // eslint-disable-next-line no-param-reassign
        payload.time = `${dayjs(data.date).format('YYYY-MM-DD')} ${time}:00`;

        createTask(payload);
    };

    const clearForm = () => {
        reset();
        setTime('');
    };

    // handle error
    useError(error, clearError);

    useEffect(() => {
        if (success) {
            clearSuccess();
            category.choose(category.current); // unselect category
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            navigation.navigate(Routes.Task, { task: currentTask! });
            clearForm();
        }

        // eslint-disable-next-line
    }, [success]);

    return (
        <FormProvider methods={methods}>
            <ScrollView style={styles.flex}>
                <View style={styles.flex}>
                    <Text>Title</Text>
                    <Input name='title' placeholder='eat out..' />
                </View>
                <View style={styles.flex}>
                    <Text>Date</Text>
                    <InputDatePicker name='date' />
                </View>
                <View style={styles.flex}>
                    <Text>Time</Text>
                    <TimePicker
                        text={time || 'Pick Time'}
                        visible={isTimePickerVisible}
                        onOpen={onOpen}
                        onDismiss={onDismiss}
                        onConfirm={onConfirm}
                    />
                </View>
                <View style={[styles.flex, styles.description]}>
                    <Text>Description</Text>
                    <Input multiline numberOFLines={4} name='description' placeholder='Add task description here' />
                </View>
                <Categories type='select' />
                <Button loading={loading} title='Create Task' onPress={handleSubmit(onSubmit)} />
            </ScrollView>
        </FormProvider>
    );
};

export default CreateTaskForm;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginBottom: 2,
        // borderWidth:1,
    },
    description: {
        marginBottom: 8,
    },
});
