import React, { FC } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButtonComponent from './IconButton';
import { Navigation } from '../types';

type BackButtonProps = {
    size?: number;
};

const BackButton: FC<BackButtonProps> = ({ size = 20 }) => {
    const { goBack } = useNavigation<Navigation>();

    return (
        <View>
            <IconButtonComponent size={size} icon='keyboard-backspace' color='#252525' onPress={goBack} />
        </View>
    );
};

export default BackButton;
