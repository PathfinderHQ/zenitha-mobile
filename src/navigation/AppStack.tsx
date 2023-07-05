import {
    EditProfileScreen,
    ProfileScreen,
    SearchTasksScreen,
    TaskDetailScreen,
    ViewTodayTasksScreen,
} from '../screens';
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
    {
        id: 3,
        name: Routes.EditProfile,
        component: EditProfileScreen,
    },
    {
        id: 4,
        name: Routes.ViewTodayTasks,
        component: ViewTodayTasksScreen,
    },
    {
        id: 5,
        name: Routes.ViewDetail,
        component: TaskDetailScreen,
    },
    {
        id: 6,
        name: Routes.SearchTasks,
        component: SearchTasksScreen,
    },
];
