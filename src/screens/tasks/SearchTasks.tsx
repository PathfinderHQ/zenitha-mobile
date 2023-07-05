import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Routes, Colors } from '../../constants';
import { FutureTaskCard, DateToday, FloatingButton, MainHorizontalDivider, SearchBox } from '../../components';

const { width } = Dimensions.get('screen');

export type SearchTasksProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.SearchTasks>;
};

const SearchTasksScreen: FC<SearchTasksProps> = ({ navigation }) => {
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>('');

    const toggle = () => setShowCalendar((prevState) => !prevState);

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <SearchBox />
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.ViewTodayTasks)}>
                        <Text style={styles.text}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.futureCardContainer}>
                    <ScrollView>
                        <DateToday />
                        <MainHorizontalDivider />
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
                        <Text style={styles.dateText}>Date of the tasks shown below</Text>
                        <MainHorizontalDivider />
                        <FutureTaskCard
                            startTime='5:30 pm'
                            dueTime='8:30 pm'
                            title='House Cleaning'
                            onPress={() => navigation.navigate(Routes.ViewDetail)}
                        />
                        <Text style={styles.dateText}>Date of the tasks shown below</Text>
                        <MainHorizontalDivider />
                        <FutureTaskCard
                            startTime='5:30 pm'
                            dueTime='8:30 pm'
                            title='House Cleaning'
                            onPress={() => navigation.navigate(Routes.ViewDetail)}
                        />
                        <FutureTaskCard
                            startTime='5:30 pm'
                            dueTime='8:30 pm'
                            title='House Cleaning'
                            onPress={() => navigation.navigate(Routes.ViewDetail)}
                        />
                    </ScrollView>
                    <View style={styles.addTask}>
                        <FloatingButton />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SearchTasksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        marginHorizontal: width / 10,
    },
    futureCardContainer: {
        flex: 9,
    },

    addTask: {
        flex: 1,
        alignSelf: 'flex-end',
    },
    text: {
        alignSelf: 'center',
        color: Colors.placeholder,
        fontSize: 16,
        margin: 10,
    },
    dateText: {
        fontSize: 24,
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
