import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { RootStackParamList } from '../types';
import { Routes } from '../constants';

type FloatingButtonProps = {
    onPress?: () => void;
};

const FloatingButton: FC<FloatingButtonProps> = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return <FAB icon='plus' style={styles.fab} onPress={() => navigation.navigate(Routes.CreateTask)} color='white' />;
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#252525',
    },
});
export default FloatingButton;
