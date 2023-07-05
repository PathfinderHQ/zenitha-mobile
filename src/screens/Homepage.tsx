import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { IconButtonComponent, FloatingButton } from '../components';
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
            <View style={styles.menu}>
                <IconButtonComponent
                    icon='menu'
                    size={20}
                    color='#252525'
                    onPress={() => navigation.navigate(Routes.Profile)}
                />
            </View>
            <Text>Hello, {user?.email}</Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.ViewTodayTasks)}>
                    <Text>ViewTask</Text>
                </TouchableOpacity>
            </View>
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
