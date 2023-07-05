import React, { FC, useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IDotMenuProps {
    vertical?: boolean;
}

const DotMenu: FC<IDotMenuProps> = ({ vertical }) => {
    const [visible, setVisible] = useState(false);

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
                        <MaterialCommunityIcons name={direction} size={24} color='white' />
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
                    onPress={hideMenu}
                    title='Delete'
                    leadingIcon='delete'
                />
            </Menu>
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
