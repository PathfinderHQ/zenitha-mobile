import {
    ChangePasswordScreen,
    EditProfileScreen,
    ProfileScreen,
    SearchTasksScreen,
    TaskDetailScreen,
    ViewTodayTasksScreen,
    CreateTaskScreen,
} from '../screens';
import { Routes } from '../constants';
import Homepage from '../screens/Homepage';
import CreateCategoryScreen from '../screens/CreateCategory';
import EditTaskScreen from '../screens/tasks/EditTask';

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
    {
        id: 7,
        name: Routes.ChangePassword,
        component: ChangePasswordScreen,
    },
    {
        id: 8,
        name: Routes.CreateTask,
        component: CreateTaskScreen,
    },
    {
        id: 9,
        name: Routes.CreateCategory,
        component: CreateCategoryScreen,
    },
    {
        id: 10,
        name: Routes.EditTask,
        component: EditTaskScreen,
    },
];
