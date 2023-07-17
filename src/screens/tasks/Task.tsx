import React, { FC, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Spinner, TaskDetailCard } from '../../components';
import { useTasks } from '../../zustand';
import { Navigation } from '../../types';
import { Routes } from '../../constants';

const Task: FC = () => {
    const navigation = useNavigation<Navigation>();

    const { task } = useTasks();

    useEffect(() => {
        if (!task) {
            navigation.navigate(Routes.Tasks);
        }

        // eslint-disable-next-line
    }, []);

    if (!task) return <Spinner />;

    return (
        <View style={styles.container}>
            <TaskDetailCard task={task} />
        </View>
    );
};

export default Task;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
