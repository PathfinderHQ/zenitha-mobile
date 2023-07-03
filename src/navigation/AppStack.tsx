import { ProfileScreen } from '../screens';
import { Routes } from '../constants';
import Homepage from '../screens/Homepage';

export const appScreens = [
    {
        id: 1,
        name: Routes.Homepage,
        component: Homepage,
    },
    {
        id: 2,
        name: Routes.Profile,
        component: ProfileScreen,
    },
];
