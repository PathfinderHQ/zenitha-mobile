import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { AuthRoutes, Colors } from '../constants';
import { ForgotPasswordForm } from '../sections/auth';

const { width } = Dimensions.get('screen');

export type ForgotPasswordScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.Forgot>;
};

const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.small_text}>Don't worry, enter your email and we'll send you a verification code.</Text>
            <ForgotPasswordForm navigation={navigation} />
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.Login)}>
                    <Text style={styles.link_text}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ForgotPasswordScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        marginHorizontal: width / 10,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
    small_text: {
        width: '80%',
        marginBottom: 10,
        fontSize: 16,
    },
});
