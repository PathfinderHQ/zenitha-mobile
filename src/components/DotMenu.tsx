import React, { FC, useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DeleteDialog from './DeleteDialog';

interface IDotMenuProps {
    vertical?: boolean;
    dark?: boolean;
    onDelete: () => void;
}

const DotMenu: FC<IDotMenuProps> = ({ vertical, dark, onDelete }) => {
    const [visible, setVisible] = useState(false);
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

    const showDeleteDialog = () => {
        setVisible(false);
        setDeleteDialogVisible(true);
    };

    const close = () => setDeleteDialogVisible(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const direction = vertical ? 'dots-vertical' : 'dots-horizontal';

    return (
        <View style={styles.container}>
            <Menu
                style={styles.menu}
                visible={visible}
                anchor={
                    <Text onPress={showMenu}>
                        <MaterialCommunityIcons name={direction} size={30} color={dark ? '#000000' : 'white'} />
                    </Text>
                }
                onDismiss={hideMenu}
            >
                <Menu.Item style={{ backfaceVisibility: 'hidden' }} onPress={hideMenu} title='Edit' leadingIcon='pen' />
                <Divider style={styles.grey} />
                <Menu.Item
                    style={{ backfaceVisibility: 'hidden' }}
                    onPress={hideMenu}
                    title='Complete'
                    leadingIcon='check'
                    rippleColor='rgba(173, 181, 189, 0.5)'
                />
                <Divider style={styles.grey} />
                <Menu.Item
                    style={{ backfaceVisibility: 'hidden' }}
                    onPress={showDeleteDialog}
                    title='Delete'
                    leadingIcon='delete'
                />
            </Menu>
            <DeleteDialog onDelete={onDelete} text='Delete Task?' visible={deleteDialogVisible} close={close} />
        </View>
    );
};

export default DotMenu;

const styles = StyleSheet.create({
    menu: {
        borderRadius: 8,
        backfaceVisibility: 'hidden',
        zIndex: 100,
    },
    menuItem: {
        borderRadius: 8,
        backgroundColor: 'black',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
    },
    grey: {
        backgroundColor: 'grey',
    },
    text: {
        fontSize: 18,
    },
});
