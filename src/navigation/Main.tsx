import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// types
import { RootStackParamList } from '../types';

// context
import { AuthProvider } from '../contexts/AuthContext';

// constants
import { Fonts, navigationRef, Routes, theme } from '../constants';

// screens
import { authScreens } from './AuthStack';

// components
import { Snackbar, Spinner } from '../components';
import DrawerNavigator from './DrawerNavigator';

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
            <AuthProvider>
                <SafeAreaProvider>
                    <PaperProvider theme={theme}>
                        <Stack.Navigator>
                            <Stack.Group screenOptions={{ headerShown: false }}>
                                {authScreens.map(({ id, name, component }) => (
                                    <Stack.Screen key={id} name={name} component={component} />
                                ))}
                            </Stack.Group>
                            <Stack.Screen
                                options={{ headerShown: false }}
                                name={Routes.Dashboard}
                                component={DrawerNavigator}
                            />
                        </Stack.Navigator>
                        <Snackbar />
                    </PaperProvider>
                </SafeAreaProvider>
            </AuthProvider>
        </NavigationContainer>
    );
};

export default Main;
