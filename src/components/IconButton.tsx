import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton as RNIconButton } from 'react-native-paper';

interface IconButtonProps {
    size: number;
    onPress?: () => void;
    icon: string;
    color: string;
}

const IconButton: FC<IconButtonProps> = ({ icon, onPress, size, color }) => {
    return (
        <View style={styles.container}>
            <RNIconButton icon={icon} iconColor={color} size={size} onPress={onPress} />
        </View>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
});
