import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TaskDetailCard } from '../../components';
import { RootStackParamList } from '../../types';
import { Routes } from '../../constants';

const Task: FC = () => {
    const { params } = useRoute<RouteProp<RootStackParamList, Routes.Task>>();

    return (
        <View style={styles.container}>
            <TaskDetailCard task={params.task} />
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
