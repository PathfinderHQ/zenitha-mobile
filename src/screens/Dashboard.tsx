// react
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { DrawerActions } from '@react-navigation/native';

// components
import { IconButton, FloatingButton } from '../components';

// hooks
import { useAuth } from '../hooks';

// constants
import { Routes } from '../constants';
import { Navigation } from '../types';
import { AutomatedTaskForm } from '../sections/tasks';

const Dashboard: FC = () => {
    const navigation = useNavigation<Navigation>();
    const { auth } = useAuth();

    const { user } = auth;
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <IconButton
                    icon='menu'
                    size={20}
                    color='#252525'
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                />
            </View>
            <Text style={styles.text}>
                Hello, {user?.email}, type natural language to create tasks, enter time and date for more precision.
            </Text>
            <AutomatedTaskForm />
            <FloatingButton onPress={() => navigation.navigate(Routes.CreateTask)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        height: 844,
        overflow: 'hidden',
        width: '100%',
    },
    menu: {
        paddingTop: 30,
    },
    text: {
        padding: 20,
        fontSize: 18,
        lineHeight: 22,
    },
});
export default Dashboard;
