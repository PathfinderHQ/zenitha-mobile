import React, { FC, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Tasks } from '../../sections/tasks';
import { useTasks } from '../../zustand';

const CompletedTasksScreen: FC = () => {
    const { pastTasks, tasks, fetchTasks, fetch } = useTasks();

    const { loading } = fetch;

    useEffect(() => {
        if (tasks.length === 0) {
            fetchTasks();
        }

        // eslint-disable-next-line
    }, []);

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <Tasks loading={loading} text='Past Tasks' tasks={pastTasks} searchBar />
            </View>
        </SafeAreaView>
    );
};

export default CompletedTasksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
