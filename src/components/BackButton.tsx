import React, { FC } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButtonComponent from './IconButton';

const BackButton: FC = () => {
    const { goBack } = useNavigation();

    return (
        <View>
            <IconButtonComponent size={20} icon='keyboard-backspace' color='#252525' onPress={goBack} />
        </View>
    );
};

export default BackButton;
