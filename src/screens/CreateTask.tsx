import React from 'react';
import { View, StyleSheet, Text, Platform, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Routes } from '../constants';
import { BackButton } from '../components';
import CreateTaskForm from '../sections/task/CreateTaskFofm';

const { width } = Dimensions.get('screen');

export type CreateTaskScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.CreateTask>;
};

const CreateTaskScreen: React.FC<CreateTaskScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackButton />
                    <Text style={styles.text}>Create a Task</Text>
                </View>
                <View style={styles.profileContainer}>
                    <CreateTaskForm />
                </View>
                {/* <View style={styles.optionsContainer}></View> */}
            </View>
        </SafeAreaView>
    );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        width: '100%',
    },
    profileContainer: {
        flex: 8,
        width: width / 1.1,
    },
    text: {
        fontSize: 22,
        color: '#212529',
        fontFamily: 'Inter',
        fontWeight: '500',
        paddingLeft: 50,
    },
    optionsContainer: {
        top: 323,
        left: 20,
        width: 205,
        position: 'absolute',
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
