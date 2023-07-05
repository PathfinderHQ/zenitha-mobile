import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar as BaseAvatar } from 'react-native-paper';

const Avatar: FC = () => {
    return <BaseAvatar.Text size={120} label='ZM' color='#fff' style={styles.container} />;
};

export default Avatar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
});
