import { FC } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Avatar, BackButton } from '../../components';

import { UpdateProfileForm } from '../../sections/profile';
import { useAuth } from '../../hooks';

const EditProfileScreen: FC = () => {
    const { auth } = useAuth();

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.backButton}>
                        <BackButton />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Update Profile</Text>
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <Avatar user={auth.user} size={100} />

                    <UpdateProfileForm />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
    },
    profileContainer: {
        flex: 7,
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    text: {
        fontSize: 22,
        color: '#212529',
        fontFamily: 'Inter',
        fontWeight: '500',
    },
    textContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        zIndex: 200,
        marginLeft: '-4%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        position: 'relative',
    },
});
