import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { IconButtonComponent, FloatingButton, TimePicker, InputDatePicker, DatePicker } from '../components';
import { useAuth } from '../hooks';
import { Routes } from '../constants';
import DeleteDialog from '../components/DeleteDialog';
import ToggleSearch from '../components/Search';

export type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Homepage'>;
};

const Homepage: FC<HomeScreenProps> = ({ navigation }) => {
    const { auth } = useAuth();

    const { user } = auth;
    return (
        <View style={styles.container}>
            <TimePicker />

            <View style={styles.menu}>
                <IconButtonComponent
                    icon='menu'
                    size={20}
                    color='#252525'
                    onPress={() => navigation.navigate(Routes.Profile)}
                />
            </View>
            <Text style={styles.text}>
                Hello, {user?.email}, type natural language to create tasks, enter time and date for more precision.
            </Text>
            <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                placeholder='Your task starts here'
                // value={value}
                style={{ padding: 20 }}
            />
            <View>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.ViewTodayTasks)}>
                    <Text>ViewTask</Text>
                </TouchableOpacity>
            </View>

            <FloatingButton onPress={() => navigation.navigate(Routes.CreateTask)} />
            <InputDatePicker />
            <DatePicker />
            <FloatingButton />

            <DeleteDialog />
            <ToggleSearch />
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
export default Homepage;
