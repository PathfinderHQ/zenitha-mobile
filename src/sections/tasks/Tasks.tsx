import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { TaskCard, MainHorizontalDivider, Spinner } from '../../components';
import { Colors, Routes } from '../../constants';
import { Navigation, Task } from '../../types';

type TasksProps = {
    text?: string;
    tasks: Task[];
    loading?: boolean;
    searchBar?: boolean;
    placeholder?: string;
};

const Tasks: FC<TasksProps> = ({ text, tasks, loading, searchBar, placeholder }) => {
    const navigation = useNavigation<Navigation>();

    if (loading) return <Spinner />;

    return (
        <View style={styles.futureCardContainer}>
            {searchBar && (
                <View style={styles.searchIconContainer}>
                    <Feather name='search' size={20} color='black' onPress={() => navigation.navigate(Routes.Search)} />
                </View>
            )}
            <Text style={styles.reminder}>{text}</Text>
            <MainHorizontalDivider />
            {!tasks.length ? (
                <View style={styles.info}>
                    <Text>{placeholder}</Text>
                </View>
            ) : (
                <ScrollView>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default Tasks;

const styles = StyleSheet.create({
    futureCardContainer: {
        flex: 6,
        position: 'relative',
    },
    reminder: {
        fontSize: 20,
        color: Colors.placeholder,
        marginBottom: 5,
    },
    info: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIconContainer: {
        // marginBottom: 2,
        position: 'absolute',
        right: 0,
        marginBottom: 5,
        zIndex: 10,
    },
});
