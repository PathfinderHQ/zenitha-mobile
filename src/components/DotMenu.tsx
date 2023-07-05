import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Dialog } from '@rneui/themed';

export default function DotMenu() {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const [visibleDialog, setVisibleDialog] = useState(false);

    const toggleDialog = () => {
        setVisibleDialog(!visibleDialog);
    };

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
                <MenuItem style={styles.menuItem} onPress={hideMenu} textStyle={styles.text}>
                    <Feather name='edit-2' size={16} color='black' /> Edit
                </MenuItem>
                {/* <MenuDivider color='#1A434961' /> */}
                <MenuItem style={styles.menuItem} textStyle={styles.text} onPress={hideMenu}>
                    <Feather name='check' size={20} color='black' /> Complete
                </MenuItem>
                {/* <MenuDivider color='#1A434961' /> */}
                <MenuItem style={styles.menuItem} textStyle={styles.text} onPress={toggleDialog}>
                    <MaterialCommunityIcons name='delete-outline' size={18} color='black' /> Delete
                </MenuItem>
            </Menu>
            <Dialog isVisible={visibleDialog} onBackdropPress={toggleDialog}>
                <Dialog.Title
                    title='Delete Task?'
                    titleStyle={{ color: 'black', fontSize: 20, fontWeight: '400', marginLeft: '30%' }}
                />
                <Dialog.Actions>
                    <Dialog.Button
                        type='clear'
                        title='Cancel'
                        onPress={() => console.log('Primary Action Clicked!')}
                        titleStyle={{ color: 'black', fontSize: 18, fontWeight: '100', padding: 20, marginRight: 20 }}
                    />
                    <Dialog.Button
                        title='Delete'
                        onPress={() => console.log('Secondary Action Clicked!')}
                        titleStyle={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: '100',
                            padding: 20,
                        }}
                    />
                </Dialog.Actions>
            </Dialog>
        </View>
    );
}
const styles = StyleSheet.create({
    menu: {
        borderRadius: 8,
        backfaceVisibility: 'hidden',
        zIndex: 100,
        borderWidth: 1,
        borderColor: '#1A4034961',
    },
    menuItem: {
        // borderWidth: 1,
        // borderColor: '#FFFFFF',
        borderRadius: 8,
        backgroundColor: '#1A4034961',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
    },
    text: {
        fontSize: 18,
    },
});
