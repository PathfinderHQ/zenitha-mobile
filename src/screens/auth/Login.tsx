import React, { FC } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginForm } from '../../sections/auth';
import { RootStackParamList } from '../../types';
import { AuthRoutes, Colors } from '../../constants';

const { width } = Dimensions.get('screen');

export type LoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.Login>;
};

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LoginForm navigation={navigation} />
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.Forgot)}>
                    <Text style={styles.link_text}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.Register)}>
                    <Text style={styles.link_text}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        height: 40,
        alignContent: 'space-between',
    },
    separator: {
        fontSize: 14,
        color: Colors.placeholder,
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        alignSelf: 'center',
    },
    link: {
        flex: 1,
        width: width / 2.2,
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
