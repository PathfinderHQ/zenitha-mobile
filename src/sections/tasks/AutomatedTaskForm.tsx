import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/core';
import FormProvider from '../../components/hook-form/FormProvider';
import { Button, Input } from '../../components';
import { AutomatedTaskPayload, Navigation } from '../../types';
import { Routes, sendIcon } from '../../constants';
import { useTasks } from '../../zustand';
import { useError } from '../../hooks';

const AutomatedTaskForm = () => {
    const navigation = useNavigation<Navigation>();
    const { automated, createAutomatedTask } = useTasks();

    const methods = useForm({
        defaultValues: {
            content: '',
        },
    });

    const onSubmit = (data: AutomatedTaskPayload) => {
        createAutomatedTask(data);
    };

    const { handleSubmit, watch, reset } = methods;

    const { content } = watch();

    const isDisabled = content.length < 3;

    const { loading, error, success, clearError, clearSuccess } = automated;

    useError(error, clearError);

    useEffect(() => {
        if (success) {
            navigation.navigate(Routes.Upcoming);
            reset();
            clearSuccess();
        }

        // eslint-disable-next-line
    }, [success]);

    return (
        <FormProvider methods={methods}>
            <View style={styles.box}>
                <Input
                    name='content'
                    multiline
                    numberOfLines={8}
                    placeholder='Your task starts here'
                    style={styles.input}
                    underlineColor='transparent'
                />
                <Button
                    loading={loading}
                    disabled={isDisabled}
                    customStyles={styles.button}
                    title='Submit'
                    icon={sendIcon.link}
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </FormProvider>
    );
};

export default AutomatedTaskForm;

const styles = StyleSheet.create({
    box: {
        display: 'flex',
    },
    input: {
        backgroundColor: 'transparent',
        marginHorizontal: '5%',
    },
    button: {
        backgroundColor: '#000',
        color: '#fff',
    },
});
