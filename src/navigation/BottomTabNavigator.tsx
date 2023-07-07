import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TasksScreen from '../screens/tasks/ViewTodayTasks';
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
                    const icon = route.name === 'Home' ? 'home' : 'calendar-month';
                    return <MaterialCommunityIcons name={icon} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: '#000',
            })}
        >
            <Tab.Screen name='Home' component={AppStack} />
            <Tab.Screen name='Tasks' component={TasksScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
