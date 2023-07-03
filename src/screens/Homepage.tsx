import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import IconButtonComponent from '../components/IconButton';
import { useAuth } from '../hooks';
import { Routes } from '../constants';
import Fab from '../components/Fab';

export type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Homepage'>;
};

const Homepage: FC<HomeScreenProps> = ({ navigation }) => {
    const { auth, logout } = useAuth();

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
            <Fab />
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
});
export default Homepage;
