import React, { FC } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButtonComponent from './IconButton';

const GobackButton: FC = () => {
    const navigator = useNavigation();
    return (
        <View>
            <IconButtonComponent size={20} icon='keyboard-backspace' color='#252525' onPress={navigator.goBack} />
        </View>
    );
};

export default GobackButton;
