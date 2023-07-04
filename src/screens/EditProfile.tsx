import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { AuthRoutes, Icons, Routes } from '../constants';
import Avatars from '../components/Avatars';
import CategoryButton from '../components/CategoryButton';
import UpdateProfileForm from '../sections/profile/ProfileForm';

export type EditProfileScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'EditProfile'>;
};

const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ navigation }) => {
    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleButtonPress = (buttonIndex: number) => {
        setActiveButton(buttonIndex);
        console.log(`Pressed button ${buttonIndex + 1}`);
      };
    
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatars />
            </View>
            <UpdateProfileForm />
            <View style={styles.buttons}>
            {[0, 1, 2].map((buttonIndex) => (
        <CategoryButton
          key={buttonIndex}
          onPress={() => handleButtonPress(buttonIndex)}
          name={`Button ${buttonIndex + 1}`}
          color={activeButton === buttonIndex ? 'red' : '#ddd'}
        />
      ))}</View>
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
        alignSelf: 'center',
        padding: 10,
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
    buttons:{
        flex:1,
        flexDirection:'row',
        height:20,
    }
});
