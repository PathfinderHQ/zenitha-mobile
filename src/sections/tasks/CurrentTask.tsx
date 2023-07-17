import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { CurrentTaskCard, MainHorizontalDivider } from '../../components';
import { Routes } from '../../constants';
import { Navigation, Task } from '../../types';

type ICurrentTaskProp = {
    task: Task;
};

const CurrentTask: FC<ICurrentTaskProp> = ({ task }) => {
    const navigation = useNavigation<Navigation>();

    return (
        <View style={styles.currentCardContainer}>
            <MainHorizontalDivider />
            <CurrentTaskCard task={task} onPress={() => navigation.navigate(Routes.Task)} />
        </View>
    );
};

export default CurrentTask;

const styles = StyleSheet.create({
    currentCardContainer: {
        flex: 8,
    },
});
