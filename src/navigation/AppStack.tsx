import { DashboardScreen, ProfileScreen } from '../screens';
import { Routes } from '../constants';

export const appScreens = [
    {
        id: 1,
        name: Routes.Dashboard,
        component: DashboardScreen,
    },
    {
        id: 2,
        name: Routes.Profile,
        component: ProfileScreen,
    },
];
