import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { AuthRoutes, Colors } from '../../constants';
import { ResetPasswordForm } from '../../sections/auth';

const { width } = Dimensions.get('screen');

export type ResetPasswordScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.Reset>;
};

const ResetPasswordScreen: FC<ResetPasswordScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <ResetPasswordForm navigation={navigation} />
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.Login)}>
                    <Text style={styles.link_text}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ResetPasswordScreen;

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
});
