import { FC } from 'react';
import { View, StyleSheet, Text, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { BackButton } from '../../components';
import { CreateTaskForm } from '../../sections/tasks';

const { width } = Dimensions.get('screen');

const CreateTaskScreen: FC = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.backButton}>
                        <BackButton />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Create Task</Text>
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <CreateTaskForm />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        position: 'relative',
    },
    profileContainer: {
        flex: 7,
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
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
