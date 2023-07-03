import React, { FC } from 'react';
import { Pressable, StyleSheet, Image, View, ImageURISource, Text } from 'react-native';

interface IOptionProps {
    title: string;
    onPress?: () => void;
    icon?: ImageURISource;
}

const ProfileOption: FC<IOptionProps> = ({ title, onPress, icon }) => {
    return (
        <View style={styles.container}>
            {icon && <Image source={icon} />}
            <Pressable onPress={onPress} style={styles.option}>
                <Text>{title}</Text>
            </Pressable>
        </View>
    );
};

export default ProfileOption;

const styles = StyleSheet.create({
    container: {
        width: 327,
        alignItems: 'flex-start',
        gap: 16,
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 0,
    },
    option: {
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        fontSize: 16,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: -0.25,
    },
});
