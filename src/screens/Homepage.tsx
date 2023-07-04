import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { IconButtonComponent, Fab } from '../components';
import { useAuth } from '../hooks';
import { Routes } from '../constants';

export type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Homepage'>;
};

const Homepage: FC<HomeScreenProps> = ({ navigation }) => {
    const { auth } = useAuth();
    const [value] = React.useState();
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
            <Text style={styles.text}>
                Hello, {user?.email}, type natural language to create tasks, enter time and date for more precision.
            </Text>
            <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                placeholder='Your task starts here'
                value={value}
                style={{ padding: 20 }}
            />
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
    text: {
        padding: 20,
        fontSize: 18,
        lineHeight: 22,
    },
});
export default Homepage;
