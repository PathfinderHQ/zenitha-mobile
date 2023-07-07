import React, { FC } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Portal, Snackbar as RNSnackbar } from 'react-native-paper';
import { useSnackbar } from '../zustand';

const { width } = Dimensions.get('screen');

const Snackbar: FC = () => {
    const { visible, message, dismiss } = useSnackbar();

    return (
        <Portal>
            <RNSnackbar wrapperStyle={styles.container} visible={visible} onDismiss={dismiss} action={{ label: 'X' }}>
                {message}
            </RNSnackbar>
        </Portal>
    );
};

export default Snackbar;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        margin: 'auto',
    },
});
