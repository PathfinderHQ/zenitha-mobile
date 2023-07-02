import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

export default function DotMenu() {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    return (
        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Menu
                visible={visible}
                anchor={<Text onPress={showMenu}>Show menu</Text>}
                onRequestClose={hideMenu}
            >
                <MenuItem onPress={hideMenu}>Edit</MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu}>Complete</MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu}>Delete</MenuItem>
            </Menu>
        </View>
    );
}