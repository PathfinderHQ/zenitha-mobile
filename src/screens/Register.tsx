import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button, HorizontalDivider } from '../components';
import { RootStackParamList } from '../types';
import Colors from '../constants/colors';
import { RegisterForm } from '../sections/auth';
import { AuthRoutes, google } from '../constants';

export type SignUpScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.Register>;
};

const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <RegisterForm navigation={navigation} />
            <View style={styles.loginLink}>
                <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.Login)}>
                    <Text style={{ textDecorationLine: 'underline' }}>Login</Text>
                </TouchableOpacity>
            </View>
            <HorizontalDivider />
            <Button icon={google.link} title='Continue with Google' onPress={() => alert(`Pressed`)} />
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
    separator: {
        fontSize: 14,
        color: Colors.placeholder,
    },
    loginLink: {
        flexDirection: 'row',
        marginVertical: 20,
    },
});
