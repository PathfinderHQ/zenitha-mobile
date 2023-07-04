import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import { Routes } from '../constants';
import Colors from '../constants/colors';
import { CurrentTaskCard, FutureTaskCard, DateToday, HorizontalCalendar } from '../components';
import MainHorizontalDivider from '../components/MainHorizontalDivider';

const { width } = Dimensions.get('screen');

export type ViewTodayTasksProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.ViewTodayTasks>;
};

const ViewTodayTasksScreen: FC<ViewTodayTasksProps> = ({ navigation }) => {
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>('');

    const toggle = () => setShowCalendar((prevState) => !prevState);

    return (
        <View style={styles.container}>
            <View style={styles.calendarIcon}>
                <MaterialCommunityIcons name='calendar-month-outline' size={30} color='black' onPress={toggle} />
            </View>
            <View style={styles.date}>
                {showCalendar ? (
                    <HorizontalCalendar selected={selectedDate} onSelectDate={setSelectedDate} />
                ) : (
                    <DateToday />
                )}
            </View>
            <View style={styles.currentCardContainer}>
                <MainHorizontalDivider />
                <CurrentTaskCard
                    startTime='8:20'
                    duration='2 hours'
                    title='Assignment'
                    onPress={() => navigation.navigate(Routes.ViewDetail)}
                />
                <MainHorizontalDivider />
            </View>
            <View style={styles.futureCardContainer}>
                <Text style={styles.reminder}>Today's Reminders</Text>

                <FutureTaskCard
                    startTime='5:30 pm'
                    dueTime='8:30 pm'
                    title='House Cleaning'
                    onPress={() => navigation.navigate(Routes.ViewDetail)}
                />
            </View>
            <View style={styles.addTask}>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.Dashboard)}>
                    <Text style={styles.link_text}>Add task</Text>
                </TouchableOpacity>
            </View>
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
        flex: 6,
    },
    reminder: {
        fontSize: 20,
        color: Colors.placeholder,
    },
    date: {
        flex: 2,
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
    addTask: {
        flex: 1,
        alignSelf: 'flex-end',
    },
});
