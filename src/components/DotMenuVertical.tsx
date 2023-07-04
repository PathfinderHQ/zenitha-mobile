import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function DotMenuVertical() {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Menu
                visible={visible}
                anchor={
                    <Text onPress={showMenu}>
                        <MaterialCommunityIcons name='dots-vertical' size={30} color='#D8DEF3' />
                    </Text>
                }
                onRequestClose={hideMenu}
            >
                <MenuItem onPress={hideMenu}>
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
