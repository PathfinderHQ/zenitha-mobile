import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { AuthRoutes, Icons, Routes } from '../../constants';
import { Navigation } from '../../types';
import { useAuth } from '../../hooks';

const ProfileOptions: FC = () => {
    const { logout } = useAuth();
    const { navigate } = useNavigation<Navigation>();

    const options = [
        {
            id: 1,
            label: 'Edit Profile',
            icon: Icons.USER,
            onPress: () => navigate(Routes.EditProfile),
        },
        {
            id: 2,
            label: 'Change Password',
            icon: Icons.KEY,
            onPress: () => {
                navigate(Routes.ChangePassword);
            },
        },
        {
            id: 3,
            label: 'Logout',
            icon: Icons.LOG_OUT,
            onPress: () => {
                logout();
                navigate(AuthRoutes.Login);
            },
        },
    ];

    return (
        <>
            {options.map(({ id, label, icon, onPress }) => (
                <DrawerItem
                    labelStyle={styles.text}
                    key={id}
                    icon={() => <Image source={icon} />}
                    label={label}
                    onPress={onPress}
                />
            ))}
        </>
    );
};

export default ProfileOptions;

const styles = StyleSheet.create({
    text: {
        alignSelf: 'stretch',
        fontSize: 18,
        letterSpacing: -1,
        lineHeight: 40,
        textAlign: 'left',
        color: '#212529',
        fontFamily: 'Inter',
        fontWeight: '500',
    },
});
