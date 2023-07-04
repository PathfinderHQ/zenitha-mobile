import React, { useState } from 'react';
import { Button, Dialog, ThemeProvider } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

const DeleteDialog: React.FunctionComponent = () => {
    const theme = {
        Dialog: {
            titleStyle: {
                color: 'red',
            },
        },
    };
    const [visible2, setVisible2] = useState(false);

    const toggleDialog2 = () => {
        setVisible2(!visible2);
    };

    return (
        <ThemeProvider>
            <View>
                <View style={styles.buttonContainer}>
                    <Button title='press' onPress={toggleDialog2} buttonStyle={styles.button} />
                </View>
                <Dialog style={styles.dialogContainer} isVisible={visible2} onBackdropPress={toggleDialog2}>
                    <Dialog.Title title='Delete Task?' />
                    <Dialog.Actions>
                        <Dialog.Button
                            title='Cancel'
                            onPress={() => console.log('Primary Action Clicked!')}
                            titleStyle={{ color: 'black' }}
                        />
                        <Dialog.Button
                            title='Delete'
                            onPress={() => console.log('Secondary Action Clicked!')}
                            titleStyle={{
                                color: 'black',
                                backgroundColor: 'grey',
                                padding: 20,
                                borderRadius: 8,
                                height: 40,
                            }}
                        />
                    </Dialog.Actions>
                </Dialog>
            </View>
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        width: 220,
        margin: 20,
    },
    buttonContainer: {
        borderRadius: 50,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContainer: {
        borderRadius: 8,
    },
});

export default DeleteDialog;
