import React from 'react';
import { View } from 'react-native';
import CategoryButton from '../components/CategoryButton';

const App = () => {
    const handleButtonPress = () => {
        console.log('Button pressed');
    };

    return (
        <View>
            <CategoryButton onPress={handleButtonPress} name='Button 1' color='red' />
            <CategoryButton onPress={handleButtonPress} name='Button 2' color='green' />
            <CategoryButton onPress={handleButtonPress} name='Button 3' color='blue' />
        </View>
    );
};

export default App;
