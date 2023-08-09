import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HorizontalDivider } from '../../components';
import { RootStackParamList } from '../../types';
import { GoogleAuth, RegisterForm } from '../../sections/auth';
import { AuthRoutes, Colors } from '../../constants';

export type RegisterScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.Register>;
};

const SignUpScreen: FC<RegisterScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <RegisterForm navigation={navigation} />
            <View style={styles.loginLink}>
                <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.Login)}>
                    <Text style={{ textDecorationLine: 'underline' }}>Login</Text>
                </TouchableOpacity>
            </View>
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
