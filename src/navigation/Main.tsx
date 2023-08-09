import React, { FC, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Subscription } from 'expo-modules-core';

// types
import * as SecureStore from 'expo-secure-store';
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
import { registerForPushNotificationsAsync, sendPushNotification } from '../lib/notifications';
import { getExpoToken, setExpoToken } from '../lib';
import { useAuthSlice } from '../zustand';

const Stack = createStackNavigator<RootStackParamList>();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const Main: FC = () => {
    const { addUserPushToken } = useAuthSlice();
    const notificationListener = useRef<Subscription>({} as Subscription);
    const responseListener = useRef<Subscription>({} as Subscription);

    const [loaded] = useFonts({
        Inter: Fonts.Inter,
        InterSemiBold: Fonts.InterSemiBold,
        InterBold: Fonts.InterBold,
        InterLight: Fonts.InterLight,
        InterMedium: Fonts.InterMedium,
    });

    useEffect(() => {
        // add notification listener
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        notificationListener.current = Notifications.addNotificationReceivedListener((_notification) => {});
        responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    // register for push token
    useEffect(() => {
        const notificationSetup = async () => {
            // check if push token exists in secure storage
            await SecureStore.deleteItemAsync('expoToken');
            const pushToken = await getExpoToken();
            // only register if no push token in secure storage
            if (!pushToken) {
                const expoPushToken = await registerForPushNotificationsAsync();

                if (expoPushToken) {
                    await sendPushNotification(expoPushToken);
                    // store in secure storage
                    setExpoToken(expoPushToken);

                    // send to backend
                    addUserPushToken({ push_token: expoPushToken });
                }
            }
        };

        notificationSetup();

        // eslint-disable-next-line
    }, []);

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
