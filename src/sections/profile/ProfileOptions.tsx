import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { ProfileOption } from '../../components';
import { AuthRoutes, Icons, Routes } from '../../constants';
import { Navigation } from '../../types';
import { useAuth } from '../../hooks';

const ProfileOptions: FC = () => {
    const { logout } = useAuth();
    const { navigate } = useNavigation<Navigation>();

    const options = [
        {
            id: 1,
            title: 'Edit Profile',
            icon: Icons.USER,
            onPress: () => navigate(Routes.EditProfile),
        },
        {
            id: 2,
            title: 'Change Password',
            icon: Icons.KEY,
            onPress: () => {
                navigate(Routes.ChangePassword);
            },
        },
        {
            id: 3,
            title: 'Logout',
            icon: Icons.USER,
            onPress: () => {
                logout();
                navigate(AuthRoutes.Login);
            },
        },
    ];

    return (
        <View style={styles.optionsContainer}>
            {options.map(({ id, title, icon, onPress }) => (
                <ProfileOption key={id} title={title} icon={icon} onPress={onPress} />
            ))}
        </View>
    );
};

export default ProfileOptions;

const styles = StyleSheet.create({
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
