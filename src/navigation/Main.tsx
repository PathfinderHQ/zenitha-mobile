import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';

// types
import { RootStackParamList } from '../types';

// context
import { AuthProvider } from '../contexts/AuthContext';
import { SnackbarProvider } from '../contexts/SnackbarContext';

// constants
import { Fonts, navigationRef } from '../constants';

// screens
import { appScreens } from './AppStack';
import { authScreens } from './AuthStack';

// components
import { Snackbar, Spinner } from '../components';

const Stack = createStackNavigator<RootStackParamList>();

const Main: FC = () => {
    const [loaded] = useFonts({
        Inter: Fonts.Inter,
        InterSemiBold: Fonts.InterSemiBold,
        InterBold: Fonts.InterBold,
        InterLight: Fonts.InterLight,
        InterMedium: Fonts.InterMedium,
    });

    if (!loaded) return <Spinner size='large' />;

    return (
        <NavigationContainer ref={navigationRef}>
            <SnackbarProvider>
                <AuthProvider>
                    <PaperProvider>
                        <Stack.Navigator>
                            <Stack.Group screenOptions={{ headerShown: false }}>
                                {authScreens.map(({ id, name, component }) => (
                                    <Stack.Screen key={id} name={name} component={component} />
                                ))}
                            </Stack.Group>
                            <Stack.Group screenOptions={{ headerShown: false }}>
                                {appScreens.map(({ id, name, component }) => (
                                    <Stack.Screen key={id} name={name} component={component} />
                                ))}
                            </Stack.Group>
                        </Stack.Navigator>
                        <Snackbar />
                    </PaperProvider>
                </AuthProvider>
            </SnackbarProvider>
        </NavigationContainer>
    );
};

export default Main;
