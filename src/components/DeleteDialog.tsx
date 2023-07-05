import React, { useState } from 'react';
import { Button, Dialog } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

const DeleteDialog: React.FunctionComponent = () => {
    const [visibleDialog, setVisibleDialog] = useState(false);

    const toggleDialog = () => {
        setVisibleDialog(!visibleDialog);
    };
    return (
        <View>
            <View style={styles.buttonContainer}>
                <Button title='press' onPress={toggleDialog} buttonStyle={styles.button} />
            </View>
            <Dialog isVisible={visibleDialog} onBackdropPress={toggleDialog}>
                <Dialog.Title
                    title='Delete Task?'
                    titleStyle={{ color: 'black', fontSize: 20, fontWeight: '400', marginLeft: '30%' }}
                />
                <Dialog.Actions>
                    <Dialog.Button
                        type='clear'
                        title='Cancel'
                        onPress={() => console.log('Primary Action Clicked!')}
                        titleStyle={{ color: 'black', fontSize: 18, fontWeight: '100', padding: 20, marginRight: 20 }}
                    />
                    <Dialog.Button
                        title='Delete'
                        onPress={() => console.log('Secondary Action Clicked!')}
                        titleStyle={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: '100',
                            padding: 20,
                        }}
                    />
                </Dialog.Actions>
            </Dialog>
        </View>
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
});

export default DeleteDialog;
