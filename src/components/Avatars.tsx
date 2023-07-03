import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Avatar } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';

type AvatarComponentProps = {
    onPress?: () => void;
};

const Avatars: FC<AvatarComponentProps> = ({ onPress }) => {
    const [image, setImage] = useState<string | null>(null);
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
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
                <Avatar.Accessory size={23} onPress={pickImage} />
            </Avatar>
        </View>
    );
};

export default Avatars;
