import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAuth } from '../../hooks';
import { Avatar } from '../../components';
import { ChangePasswordForm } from '../../sections/auth';

const ChangePassword = () => {
    const { auth } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatar user={auth.user} />
            </View>
            <ChangePasswordForm />
        </View>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    profileContainer: {
        width: 400,
        alignContent: 'center',
        padding: 20,
    },
});
