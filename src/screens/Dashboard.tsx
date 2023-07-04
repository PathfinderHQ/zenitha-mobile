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
import DeleteDialog from '../components/DeleteDialog';

const { width } = Dimensions.get('screen');

export type ViewTodayTasksProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.ViewTodayTasks>;
};
const ViewTodayTasksScreen: FC<ViewTodayTasksProps> = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState<string>('');

    return (
        <View style={styles.container}>
            <View style={styles.calendarIcon}>
                <MaterialCommunityIcons name='calendar-month-outline' size={30} color='black' />
            </View>
            <View style={styles.date}>
                <HorizontalCalendar onSelectDate={setSelectedDate} selected={selectedDate} />
            </View>
            <View style={styles.addTask}>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.ViewTodayTasks)}>
                    <Text style={styles.link_text}>Add task</Text>
                </TouchableOpacity>
            </View>
            <DeleteDialog />
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
        flex: 7,
    },
    reminder: {
        fontSize: 20,
        color: Colors.placeholder,
    },
    date: {
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
    addTask: {
        flex: 1,
        alignSelf: 'flex-end',
    },
});
