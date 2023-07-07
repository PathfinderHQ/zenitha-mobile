import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, StatusBar, SafeAreaView, Platform } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Navigation } from '../../types';
import { Routes, Colors } from '../../constants';
import {
    CurrentTaskCard,
    FutureTaskCard,
    DateToday,
    HorizontalCalendar,
    MainHorizontalDivider,
    FloatingButton,
} from '../../components';

const { width } = Dimensions.get('screen');

const ViewTodayTasksScreen: FC = () => {
    const navigation = useNavigation<Navigation>();

    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>('');

    const toggle = () => setShowCalendar((prevState) => !prevState);

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.calendarIcon}>
                    <View style={styles.searchIconContainer}>
                        <Feather
                            name='search'
                            size={24}
                            color='black'
                            onPress={() => navigation.navigate(Routes.SearchTasks)}
                        />
                    </View>
                    <View style={styles.calenderIconContainer}>
                        <MaterialCommunityIcons
                            name='calendar-month-outline'
                            size={30}
                            color='black'
                            onPress={toggle}
                        />
                    </View>
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
                </View>

                <View style={styles.futureCardContainer}>
                    <MainHorizontalDivider />
                    <ScrollView>
                        <Text style={styles.reminder}>Today's Reminders</Text>

                        <FutureTaskCard
                            startTime='5:30 pm'
                            dueTime='8:30 pm'
                            title='House Cleaning'
                            onPress={() => navigation.navigate(Routes.ViewDetail)}
                        />
                        <FutureTaskCard
                            startTime='5:30 pm'
                            dueTime='8:30 pm'
                            title='Family Dinner'
                            onPress={() => navigation.navigate(Routes.ViewDetail)}
                        />
                        <FutureTaskCard
                            startTime='5:30 pm'
                            dueTime='8:30 pm'
                            title='Some Tasks'
                            onPress={() => navigation.navigate(Routes.ViewDetail)}
                        />
                    </ScrollView>
                </View>
                <View style={styles.addTask}>
                    <FloatingButton />
                </View>
            </View>
        </SafeAreaView>
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
    calenderIconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    searchIconContainer: {
        flex: 1,
        marginLeft: '7%',
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
    addTask: {
        flex: 1,
        alignSelf: 'flex-end',
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
