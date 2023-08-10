import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

export async function registerForPushNotificationsAsync() {
    let token = '';
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return token;
        }
        token = (
            await Notifications.getExpoPushTokenAsync({
                projectId: Constants?.expoConfig?.extra?.eas.projectId,
            })
        )?.data;
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}

interface SchedulePushNotificationData {
    summary: string;
    time: string;
}
export async function schedulePushNotification({ summary, time }: SchedulePushNotificationData) {
    const [date, _time] = time.split(' ');

    const trigger = new Date(`${date}T${_time}`);

    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Zenitha 📬',
            body: summary,
        },
        trigger,
    });
}
