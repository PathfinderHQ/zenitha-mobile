import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface SpinnerProps {
    size?: 'small' | 'large';
}

const Spinner: FC<SpinnerProps> = ({ size }) => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={size} color='#000' />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default Spinner;
