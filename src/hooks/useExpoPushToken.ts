import { useEffect, useRef } from 'react';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';
import { useAuthSlice } from '../zustand';
import { getExpoToken, setExpoToken } from '../lib';
import { registerForPushNotificationsAsync } from '../lib/notifications';

const useExpoPushToken = () => {
    const { addUserPushToken } = useAuthSlice();
    const notificationListener = useRef<Subscription>({} as Subscription);

    useEffect(() => {
        // add notification listener
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        notificationListener.current = Notifications.addNotificationReceivedListener((_notification) => {});

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
        };
    }, []);

    // register for push token
    useEffect(() => {
        const notificationSetup = async () => {
            // check if push token exists in secure storage
            const pushToken = await getExpoToken();

            // only register if no push token in secure storage
            if (!pushToken) {
                const expoPushToken = await registerForPushNotificationsAsync();

                if (expoPushToken) {
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
};

export default useExpoPushToken;
