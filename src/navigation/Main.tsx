import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { useFonts } from 'expo-font';

// types
import { RootStackParamList } from '../types';

// context
import { AuthProvider } from '../contexts/AuthContext';

// constants
import { Fonts, navigationRef } from '../constants';

// screens
import { appScreens } from './AppStack';
import { authScreens } from './AuthStack';

// components
import { Spinner } from '../components';

const Stack = createStackNavigator<RootStackParamList>();

const Main: FC = () => {
    const [loaded] = useFonts({
        Inter: Fonts.InterMedium,
    });

    if (!loaded) return <Spinner size='large' />;

    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <AuthProvider>
                    <Stack.Navigator>
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            {authScreens.map(({ id, name, component }) => (
                                <Stack.Screen key={id} name={name} component={component} />
                            ))}
                        </Stack.Group>
                        <Stack.Group screenOptions={{ headerShown: true }}>
                            {appScreens.map(({ id, name, component }) => (
                                <Stack.Screen key={id} name={name} component={component} />
                            ))}
                        </Stack.Group>
                    </Stack.Navigator>
                </AuthProvider>
            </NavigationContainer>
            <Toast />
        </>
    );
};

export default Main;
