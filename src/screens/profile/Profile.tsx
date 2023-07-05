import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, BackButton } from '../../components';
import { ProfileOptions } from '../../sections/profile';
import { useAuth } from '../../hooks';

const ProfileScreen: FC = () => {
    const { auth } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <BackButton />
                <Avatar user={auth.user} />
            </View>
            <ProfileOptions />
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
});
