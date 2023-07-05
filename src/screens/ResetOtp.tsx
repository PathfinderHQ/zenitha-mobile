import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { AuthRoutes, Colors } from '../constants';
import { ResetOtpForm } from '../sections/auth';

const { width } = Dimensions.get('screen');

export type ResetOtpScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.ResetOtp>;
};

const VerifyEmailScreen: React.FC<ResetOtpScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Your Password</Text>
            <Text style={styles.small_text}>Please enter the six digit code sent to your email.</Text>
            <ResetOtpForm navigation={navigation} />
            <Pressable onPress={() => navigation.navigate(AuthRoutes.Login)}>
                <Text style={styles.link_text}>Login</Text>
            </Pressable>
        </View>
    );
};

export default VerifyEmailScreen;

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
        fontSize: 18,
        marginHorizontal: width / 10,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
    small_text: {
        marginBottom: 10,
        fontSize: 16,
    },
    verification_container: {
        flexDirection: 'row',
    },
});
