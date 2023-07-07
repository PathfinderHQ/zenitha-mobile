import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { AuthRoutes, Routes, Colors } from '../../constants';
import { VerifyForm } from '../../sections/auth';

const { width } = Dimensions.get('screen');

export type VerifyEmailScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.Verify>;
};

const VerifyEmailScreen: React.FC<VerifyEmailScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let's verify your email</Text>
            <Text style={styles.small_text}>Please enter the six digit code sent to your email.</Text>
            <VerifyForm navigation={navigation} />
            <Pressable onPress={() => navigation.navigate(Routes.Dashboard)}>
                <Text style={styles.link_text}>Skip</Text>
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
