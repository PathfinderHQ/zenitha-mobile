import { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    onPress?: () => void;
    name: string;
    color: string;
    selected?: boolean;
};

const CategoryButton: FC<Props> = ({ onPress, name, color, selected }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            {selected && <MaterialCommunityIcons style={styles.icon} name='check-circle' />}
            <Text style={[styles.text]}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 100,
        height: 45,
        margin: 5,
        position: 'relative',
    },
    text: {
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
        right: 7,
        color: '#ffffff',
    },
});

export default CategoryButton;
