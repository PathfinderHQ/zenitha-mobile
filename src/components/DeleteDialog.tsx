import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';

interface DeleteDialogProps {
    visible: boolean;
    toggleVisible: (visible: boolean) => void;
}

const DeleteDialog: React.FunctionComponent<DeleteDialogProps> = () => {
    const [visible2, setVisible2] = useState(false);

    const toggleDialog2 = () => {
        setVisible2(!visible2);
    };
    return (
        <View>
            <Portal>
                <Dialog style={styles.dialogContainer} visible={visible2} onDismiss={toggleDialog2}>
                    <Dialog.Title>Delete Task?</Dialog.Title>
                    <Dialog.Actions>
                        <Button textColor='#000'>Cancel</Button>
                        <Button style={styles.secondary}>Delete</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
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
    dialogContainer: {
        borderRadius: 8,
    },
    secondary: {
        color: '#000',
        backgroundColor: '#ccc',
        padding: 20,
        borderRadius: 8,
        height: 40,
    },
});

export default DeleteDialog;
