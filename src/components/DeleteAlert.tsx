/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

const App = () => {
    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
            },
            { text: 'OK', onPress: () => {} },
        ]);

    return (
        <View style={styles.container}>
            <Button title='2-Button Alert' onPress={createTwoButtonAlert} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default App;
