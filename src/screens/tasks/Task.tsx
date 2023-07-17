import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Routes } from '../../constants';
import { TaskDetailCard } from '../../components';

export type TaskDetailProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.Task>;
};

const Task: FC<TaskDetailProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TaskDetailCard
                startTime='8:20'
                dueTime='11:20'
                title='Assignment'
                date='July 02, 2023'
                description='Descriptions here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
                category='Dashboard'
                onPress={() => navigation.navigate(Routes.Tasks)}
            />
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
