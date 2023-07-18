import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TodayTasksScreen from '../screens/tasks/Tasks';
import CompletedTasksScreen from '../screens/tasks/Completed';
import UpcomingTasksScreen from '../screens/tasks/Upcoming';
import AppStack from './AppStack';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                style: {
                    height: 60 + insets.bottom,
                },
                tabBarStyle: { height: 60, paddingBottom: 3 },
                tabBarLabelStyle: { height: 20, fontSize: 13 },
                tabBarIcon: ({ color, size }) => {
                    const icons: Record<string, string> = {
                        Home: 'home',
                        Tasks: 'calendar-month',
                        Completed: 'check-all',
                        Upcoming: 'clock-time-three-outline',
                    };

                    // used `as function` string to satisfy typescript, name props accept type 'function' | 'symbol'
                    return <MaterialCommunityIcons name={icons[route.name] as 'function'} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: '#000',
            })}
        >
            <Tab.Screen name='Home' component={AppStack} />
            <Tab.Screen name='Tasks' component={TodayTasksScreen} />
            <Tab.Screen name='Upcoming' component={UpcomingTasksScreen} />
            <Tab.Screen name='Completed' component={CompletedTasksScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
