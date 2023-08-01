import { FC } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { BackButton } from '../../components';
import { EditTaskForm } from '../../sections/tasks';
import { RootStackParamList } from '../../types';
import { Routes } from '../../constants';

const EditTaskScreen: FC = () => {
    const { params } = useRoute<RouteProp<RootStackParamList, Routes.EditTask>>();

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.backButton}>
                        <BackButton />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Edit Task</Text>
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <EditTaskForm task={params.task} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EditTaskScreen;

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
    optionsContainer: {
        top: 323,
        left: 20,
        width: 205,
        position: 'absolute',
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
