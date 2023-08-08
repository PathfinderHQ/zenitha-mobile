import React, { FC, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DeleteDialog from './DeleteDialog';
import { useCategories } from '../zustand';
import { Category } from '../types';

const { width, height } = Dimensions.get('screen');

type Props = {
    onPress?: () => void;
    item: Category;
    selected?: boolean;
    canDelete?: boolean;
};

const CategoryButton: FC<Props> = ({ onPress, item, selected, canDelete }) => {
    const [visible, setVisible] = useState(false);

    const { removeCategory } = useCategories();

    const showDialog = () => setVisible(true);

    const close = () => setVisible(false);

    const onDelete = (id: string) => {
        removeCategory(id);
        close();
    };

    return (
        <View style={styles.container}>
            {selected && <MaterialCommunityIcons style={styles.icon} name='check-circle' />}
            {canDelete && <MaterialCommunityIcons style={styles.icon} name='close-circle' onPress={showDialog} />}
            <TouchableOpacity style={[styles.button, { backgroundColor: item.color }]} onPress={onPress}>
                <Text style={[styles.text]}>{item.name}</Text>

                <DeleteDialog
                    onDelete={() => onDelete(item.id)}
                    text={`Delete ${item.name}?`}
                    close={close}
                    visible={visible}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: width / 3.9,
        height: height / 16,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
    },
    selected: {
        borderWidth: 2,
        borderColor: '#000000',
    },
    whiteBorder: {
        borderColor: '#cccccc',
    },
    icon: {
        position: 'absolute',
        top: 5,
        right: 9,
        color: '#E9ECEF',
        fontSize: 17,
        zIndex: 200,
    },
    container: {
        position: 'relative',
        width: width / 3.7,
        height: height / 16,
        marginHorizontal: 1,
        marginVertical: 5,
    },
});

export default CategoryButton;
