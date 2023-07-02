import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useAuth } from '../hooks';
import { Button } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../constants';
import Colors from '../constants/colors';
import CurrentTaskCard from '../components/CurrentTaskCard';
const { width } = Dimensions.get('screen');


export type DashboardProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.Dashboard>;
}
const Dashboard: FC<DashboardProps> = ({ navigation }) => {
    const { auth, logout } = useAuth();

    const { user } = auth;

    return (
        <View style={styles.container}>
            <CurrentTaskCard startTime='8:20' duration='2 hours' title='Assignment' onPress={() => navigation.navigate(Routes.Dashboard)} />
            <Text>Hello, {user?.email}</Text>
            <Button title='Logout' onPress={logout} />
            <TouchableOpacity onPress={() => navigation.navigate(Routes.ViewTodayTasks)}>
                <Text style={styles.link_text}>View Today's Tasks</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        marginHorizontal: width / 10,
    },
});
