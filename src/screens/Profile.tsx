import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { AuthRoutes, Icons, Routes } from '../constants';
import Avatars from '../components/Avatars';
import ProfileOption from '../components/ProfileOption';

export type ProfileScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.Profile>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatars />
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
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    profileContainer: {
        width: 400,
        paddingLeft: 20,
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
    small_text: {
        marginBottom: 10,
        fontSize: 16,
    },
    verification_container: {
        flexDirection: 'row',
    },
});
