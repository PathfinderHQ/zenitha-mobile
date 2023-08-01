// react
import React, { FC, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

// form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// date
import dayjs from 'dayjs';

// components
import { Button, FormProvider, Input, InputDatePicker, TimePicker } from '../../components';
import { Categories } from '../categories';

// types
import { Navigation, Task, TaskData, TaskPayload } from '../../types';
import { Routes } from '../../constants';
import { useCategories, useSnackbar, useTasks } from '../../zustand';
import { useError } from '../../hooks';
import { extractDateTime } from '../../lib';

interface TaskFormProp {
    task: Task;
}

const EditTaskForm: FC<TaskFormProp> = ({ task }) => {
    const navigation = useNavigation<Navigation>();

    const { show, setMessage } = useSnackbar();

    const { update, task: currentTask, updateTask } = useTasks();

    const { category } = useCategories();

    const { loading, error, clearError, success, clearSuccess } = update;

    const [isTimePickerVisible, setIsTimePickerVisible] = useState<boolean>(false);
    const [time, setTime] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const EditTaskSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        date: Yup.date().required('Date is required'),
    });

    const { date: taskDate } = extractDateTime(task.time);

    const methods = useForm<TaskData>({
        resolver: yupResolver(EditTaskSchema),
    });

    const { handleSubmit, reset, setValue } = methods;

    useEffect(() => {
        const { time: taskTime } = extractDateTime(task.time);

        setTime(taskTime.slice(0, 5));

        const fields = ['title', 'description'] as ['title', 'description'];

        fields.forEach((field) => {
            setValue(field, task[field]);
        });

        // set date
        setValue('date', new Date(taskDate));

        if (task?.category) setSelectedCategory(task.category);

        // eslint-disable-next-line
    }, [task]);

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

        updateTask(task.id, payload);
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
            // unselect category
            category.choose(category.current);
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
                    <Categories selected={selectedCategory} type='select' />
                    <Button loading={loading} title='Edit Task' onPress={handleSubmit(onSubmit)} />
                </View>
            </ScrollView>
        </FormProvider>
    );
};

export default EditTaskForm;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginBottom: 5,
    },
    description: {
        marginBottom: 8,
    },
});
