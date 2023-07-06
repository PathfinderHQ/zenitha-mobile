import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from '../../components';

import { UpdateProfileForm } from '../../sections/profile';
import { useAuth } from '../../hooks';

const EditProfileScreen: FC = () => {
    const { auth } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatar user={auth.user} size={100} />
            </View>
            <UpdateProfileForm />
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
        alignContent: 'center',
        padding: 20,
    },
});
