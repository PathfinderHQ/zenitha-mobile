import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Avatar, CategoryButton, Carousel, IconButtonComponent } from '../components';

import UpdateProfileForm from '../sections/profile/ProfileForm';
import { Routes } from '../constants';

export type EditProfileScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.EditProfile>;
};

const buttons = [
    { id: 1, name: 'HOME', onPress: () => console.log('Pressed button 1'), color: 'red' },
    { id: 2, name: 'WORK', onPress: () => console.log('Pressed button 2'), color: 'blue' },
    { id: 3, name: 'FAMILY', onPress: () => console.log('Pressed button 3'), color: 'green' },
    { id: 4, name: 'PERSONAL', onPress: () => console.log('Pressed button 4'), color: 'yellow' },
    { id: 5, name: 'Button 5', onPress: () => console.log('Pressed button 5'), color: 'purple' },
];

const EditProfileScreen: React.FC<EditProfileScreenProps> = () => {
    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleButtonPress = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
        console.log(`Pressed button ${buttonIndex + 1}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatar />
            </View>
            <UpdateProfileForm />
            <View style={styles.carousel}>
                <Carousel>
                    {buttons.map(({ id, name, onPress, color }) => (
                        <CategoryButton key={id} onPress={onPress} name={name} color={color} />
                    ))}
                </Carousel>
                <IconButtonComponent size={40} icon='plus' color='#252525' />
            </View>
            <View style={styles.buttons}>
                {[0, 1, 2].map((buttonIndex) => (
                    <CategoryButton
                        key={buttonIndex}
                        onPress={() => handleButtonPress(buttonIndex)}
                        name={`Button ${buttonIndex + 1}`}
                        color={activeButton === buttonIndex ? '#34ebc6' : '#ddd'}
                    />
                ))}
            </View>
        </View>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    profileContainer: {
        width: 400,
        alignContent: 'center',
        padding: 20,
    },
    icon: {
        alignSelf: 'center',
    },
    text: {
        alignSelf: 'stretch',
        fontSize: 22,
        letterSpacing: -1,
        lineHeight: 40,
        textAlign: 'left',
        color: '#212529',
        fontFamily: 'Inter',
        fontWeight: '500',
    },
    optionsContainer: {
        top: 323,
        left: 20,
        width: 205,
        position: 'absolute',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        height: 20,
    },
    carousel: {
        flexDirection: 'row',
    },
});
