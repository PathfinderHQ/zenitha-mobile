import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import { Routes } from '../constants';
import Colors from '../constants/colors';
import { CurrentTaskCard, FutureTaskCard, DateToday } from '../components';
import MainHorizontalDivider from '../components/MainHorizontalDivider';



const { width } = Dimensions.get('screen');

export type ViewTodayTasksProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.Dashboard>;
};
const ViewTodayTasksScreen: FC<ViewTodayTasksProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.calendarIcon}>
                <MaterialCommunityIcons name='calendar-month-outline' size={30} color='black' />
            </View>
            <View style={styles.date}>
                <DateToday />
            </View>
            <View style={styles.currentCardContainer}>
                <MainHorizontalDivider />
                <CurrentTaskCard
                    startTime='8:20'
                    duration='2 hours'
                    title='Assignment'
                    onPress={() => navigation.navigate(Routes.Dashboard)}
                />
                <MainHorizontalDivider />
            </View>
            <View style={styles.futureCardContainer}>
                <Text style={styles.reminder}>Today's Reminders</Text>

                <FutureTaskCard
                    startTime='5:30 pm'
                    dueTime='8:30 pm'
                    title='House Cleaning'
                    onPress={() => navigation.navigate(Routes.Dashboard)}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.ViewTodayTasks)}>
                <Text style={styles.link_text}>View Today's Tasks</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ViewTodayTasksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        marginHorizontal: width / 10,
    },
    currentCardContainer: {
        flex: 8,
    },
    futureCardContainer: {
        flex: 8,
    },
    reminder: {
        fontSize: 20,
        color: Colors.placeholder,
    },
    date: {
        color: Colors.main_text,
        fontSize: 20,
        flex: 1,
        flexShrink: 1,
        alignSelf: 'flex-start',
        marginLeft: '3%',
    },
    calendarIcon: {
        flex: 1,
        alignSelf: 'flex-end',
        flexShrink: 2,
        marginTop: '10%',
        marginRight: '5%',
    },
});
