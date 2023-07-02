import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

const { width } = Dimensions.get('screen');

const MainHorizontalDivider: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.divider} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width / 1.1,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.placeholder,
    },
});

export default MainHorizontalDivider;
