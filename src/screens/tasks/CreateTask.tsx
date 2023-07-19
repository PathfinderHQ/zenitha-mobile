import { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BackButton } from '../../components';
import { CreateTaskForm } from '../../sections/tasks';

const CreateTaskScreen: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.text}>Create Task</Text>
            </View>
            <View style={styles.profileContainer}>
                <CreateTaskForm />
            </View>
        </View>
    );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    profileContainer: {
        flex: 5,
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
});
