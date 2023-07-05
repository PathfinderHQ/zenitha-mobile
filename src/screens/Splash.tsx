import React, { FC, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { AuthRoutes, logo, Routes } from '../constants';
import useAuth from '../hooks/useAuth';

type SplashScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.Splash>;
};

const SplashScreen: FC<SplashScreenProps> = ({ navigation }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const words = ['Simplify', 'Achieve', 'Zenitha'];

    const { auth } = useAuth();

    const { token } = auth;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (letterIndex < words[wordIndex].length - 1) {
                setLetterIndex(letterIndex + 1);
            } else if (wordIndex < words.length - 1) {
                setWordIndex(wordIndex + 1);
                setLetterIndex(0);
            } else {
                const path = token ? Routes.Homepage : AuthRoutes.Login;

                navigation.replace(path);
            }
        }, 100);

        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [letterIndex, wordIndex]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{words[wordIndex].substring(0, letterIndex + 1)}</Text>
            <Image source={logo.link} style={styles.image} />
        </View>
    );
};
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        marginTop: 30,
    },
});
