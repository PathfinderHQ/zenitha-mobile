import React, { FC, useEffect } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import { FloatingButton } from '../../components';
import { TaskFilter, Tasks } from '../../sections/tasks';
import { useTasks } from '../../zustand';

const TodayTasksScreen: FC = () => {
    const { tasks, fetchTasks, fetch, todayTasks } = useTasks();

    const { loading } = fetch;

    useEffect(() => {
        if (tasks.length === 0) {
            fetchTasks();
        }

        // eslint-disable-next-line
    }, []);

    console.log('TODAY', todayTasks);

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <TaskFilter />
                <Tasks
                    loading={loading}
                    text={`Today's Reminder`}
                    tasks={todayTasks}
                    placeholder='There are no tasks available today'
                />
                <View style={styles.addTask}>
                    <FloatingButton />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TodayTasksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    addTask: {
        flex: 1,
        alignSelf: 'flex-end',
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
