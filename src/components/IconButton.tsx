import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

interface IconButtonProps {
    size: number;
    onPress?: () => void;
    icon: string;
    color: string;
}

const IconButtonComponent: FC<IconButtonProps> = ({ icon, onPress, size, color }) => {
    return (
        <View style={styles.container}>
            <IconButton
                icon={icon}
                iconColor={color}
                size={size}
                // ------------------------------------------------add navigation here
                onPress={onPress}
            />
        </View>
    );
};

export default IconButtonComponent;

const styles = StyleSheet.create({
    container: {
        width: 327,
        alignItems: 'flex-start',
        gap: 16,
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 0,
    },
});
