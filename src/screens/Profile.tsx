import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { AuthRoutes, Icons, Routes } from '../constants';
import { Avatar, ProfileOption, BackButton } from '../components';

export type ProfileScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.Profile>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <BackButton />
                <Avatar />
            </View>
            <View style={styles.optionsContainer}>
                <ProfileOption
                    title='Edit Profile'
                    icon={Icons.USER}
                    onPress={() => navigation.navigate(Routes.EditProfile)}
                />
                <ProfileOption
                    title='Change Password'
                    icon={Icons.KEY}
                    onPress={() => navigation.navigate(AuthRoutes.ChangePassword)}
                />
                <ProfileOption
                    title='Log Out'
                    icon={Icons.LOG_OUT}
                    onPress={() => navigation.navigate(AuthRoutes.Login)}
                />
            </View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    profileContainer: {
        width: 400,
        paddingLeft: 10,
        paddingTop: 100,
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
