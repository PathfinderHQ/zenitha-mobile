import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function DotMenu() {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    return (
        <View style={styles.container}>
            <Menu
                style={styles.menu}
                visible={visible}
                anchor={
                    <Text onPress={showMenu}>
                        <MaterialCommunityIcons name='dots-horizontal' size={24} color='white' />
                    </Text>
                }
                onRequestClose={hideMenu}
            >
                <MenuItem style={{ backfaceVisibility: 'hidden' }} onPress={hideMenu}>
                    <Feather name='edit-2' size={16} color='black' /> Edit
                </MenuItem>
                <MenuDivider color='grey' />
                <MenuItem onPress={hideMenu}>
                    <Feather name='check' size={20} color='black' /> Complete
                </MenuItem>
                <MenuDivider color='grey' />
                <MenuItem onPress={hideMenu}>
                    <MaterialCommunityIcons name='delete-outline' size={18} color='black' /> Delete
                </MenuItem>
            </Menu>
        </View>
    );
}
const styles = StyleSheet.create({
    menu: {
        borderRadius: 8,
        backfaceVisibility: 'hidden',
        zIndex: 100,
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
    },
});
