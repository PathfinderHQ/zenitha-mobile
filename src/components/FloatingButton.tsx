import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

type FloatingButtonProps = {
    onPress?: () => void;
};

const FloatingButton: FC<FloatingButtonProps> = ({ onPress }) => {
    return <FAB icon='plus' style={styles.fab} onPress={onPress} color='white' />;
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#252525',
    },
});
export default FloatingButton;
