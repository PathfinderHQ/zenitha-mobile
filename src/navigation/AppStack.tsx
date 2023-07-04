import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen, TaskDetailScreen, ViewTodayTasksScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='dashboard' component={DashboardScreen} />
            <Screen name='ViewTodayTasks' component={ViewTodayTasksScreen} />
            <Screen name='ViewDetail' component={TaskDetailScreen} />
        </Navigator>
    );
};

export default AppStack;
