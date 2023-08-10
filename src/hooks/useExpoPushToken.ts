import { useEffect, useRef } from 'react';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';

const useExpoPushToken = () => {
    const notificationListener = useRef<Subscription>({} as Subscription);

    useEffect(() => {
        // add notification listener
        // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
        notificationListener.current = Notifications.addNotificationReceivedListener((_notification) => {});

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
        };
    }, []);
};

export default useExpoPushToken;
