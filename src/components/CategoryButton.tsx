import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    onPress: () => void;
    name: string;
    color: string;
};

const CategoryButton: React.FC<Props> = ({ onPress, name, color }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
        onPress();
    };

    return (
        <TouchableOpacity
            style={[styles.button,{ backgroundColor: isPressed ? color : '#ddd' }]}
            onPress={handlePress}
        >
            <Text>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        textAlign:'center',
        padding: 10,
        borderRadius: 5,
        width: 90,
        height:40,
    },
});

export default CategoryButton;