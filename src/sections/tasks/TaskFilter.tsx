import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Routes } from '../../constants';
import { DateToday, HorizontalCalendar } from '../../components';
import { Navigation } from '../../types';

const TaskFilter = () => {
    const navigation = useNavigation<Navigation>();

    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>('');

    const toggle = () => setShowCalendar((prevState) => !prevState);

    return (
        <>
            <View style={styles.calendarIcon}>
                <View style={styles.searchIconContainer}>
                    <Feather name='search' size={24} color='black' onPress={() => navigation.navigate(Routes.Search)} />
                </View>
                <View style={styles.calenderIconContainer}>
                    <MaterialCommunityIcons name='calendar-month-outline' size={30} color='black' onPress={toggle} />
                </View>
            </View>
            <View style={styles.date}>
                {showCalendar ? (
                    <HorizontalCalendar selected={selectedDate} onSelectDate={setSelectedDate} />
                ) : (
                    <DateToday />
                )}
            </View>
        </>
    );
};

export default TaskFilter;

const styles = StyleSheet.create({
    date: {
        flex: 1,
        flexShrink: 1,
        alignSelf: 'flex-start',
        marginLeft: '1%',
        marginRight: '1%',
    },
    calenderIconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    searchIconContainer: {
        flex: 1,
        marginLeft: '2%',
        marginTop: 4,
    },
    calendarIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexShrink: 2,
        marginTop: '1%',
        marginRight: '5%',
        position: 'relative',
    },
});
