import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen, ViewTodayTaskScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='dashboard' component={DashboardScreen} />
            <Screen name='ViewTodayTasks' component={ViewTodayTaskScreen} />
        </Navigator>
    );
};

export default AppStack;
