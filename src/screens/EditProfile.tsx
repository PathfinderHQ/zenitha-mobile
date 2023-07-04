import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { AuthRoutes, Icons, Routes } from '../constants';
import Avatars from '../components/Avatars';
import CategoryButton from '../components/CategoryButton';
import UpdateProfileForm from '../sections/profile/ProfileForm';

export type EditProfileScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'EditProfile'>;
};

const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatars />
            </View>
            <UpdateProfileForm />
            <CategoryButton
                onPress={() => {
                    console.log('pressed');
                }}
                name='WORK'
                color='#252525'
            />
            <CategoryButton
                onPress={() => {
                    console.log('pressed');
                }}
                name='HOME'
                color='red'
            />
            <CategoryButton
                onPress={() => {
                    console.log('pressed');
                }}
                name='PERSONAL'
                color='blue'
            />
        </View>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    profileContainer: {
        width: 400,
        alignSelf: 'center',
        padding: 10,
    },
    text: {
        alignSelf: 'stretch',
        fontSize: 22,
        letterSpacing: -1,
        lineHeight: 40,
        textAlign: 'left',
        color: '#212529',
        fontFamily: 'Inter',
        fontWeight: '500',
    },
    optionsContainer: {
        top: 323,
        left: 20,
        width: 205,
        position: 'absolute',
    },
});
