import { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    onPress?: () => void;
    name: string;
    color: string;
    selected?: boolean;
};

const CategoryButton: FC<Props> = ({ onPress, name, color, selected }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: selected ? '#ddd' : color }]} onPress={onPress}>
            <Text style={[styles.text, { color: selected ? '#000000' : '#ffffff' }]}>{name}</Text>
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
    },
    text: {
        fontWeight: '600',
    },
});

export default CategoryButton;
