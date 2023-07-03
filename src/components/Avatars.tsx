import React, { FC } from 'react';
import { View } from 'react-native';
import { Avatar } from '@rneui/themed';

type AvatarComponentProps = {
    onPress?: () => void;
};

const Avatars: FC<AvatarComponentProps> = ({ onPress }) => {
    return (
        <View>
            <Avatar
                size={64}
                rounded
                source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
                title='Bj'
                containerStyle={{ backgroundColor: 'grey' }}
            >
                {/* add navigation here */}
                <Avatar.Accessory size={23} onPress={onPress} />
            </Avatar>
        </View>
    );
};

export default Avatars;
