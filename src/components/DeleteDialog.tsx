import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';

interface DeleteDialogProps {
    visible: boolean;
    text: string;
    close: () => void;
    onDelete: () => void;
}

const DeleteDialog: FC<DeleteDialogProps> = ({ visible, text, close, onDelete }) => {
    return (
        <View>
            <Portal>
                <Dialog style={styles.dialogContainer} visible={visible} onDismiss={close}>
                    <Dialog.Title>{text}</Dialog.Title>
                    <Dialog.Actions style={styles.actions}>
                        <Button onPress={close} textColor='#000' style={styles.button}>
                            Cancel
                        </Button>
                        <Button onPress={onDelete} textColor='#fff' style={[styles.button, styles.remove]}>
                            Delete
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    dialogContainer: {
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    button: {
        color: '#000',
        backgroundColor: '#ccc',
        paddingVertical: 6,
        paddingHorizontal: 20,
        margin: 2,
    },
    remove: {
        marginLeft: 3,
        backgroundColor: '#f00',
    },
});

export default DeleteDialog;
