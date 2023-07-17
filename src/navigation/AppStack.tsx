import { createStackNavigator } from '@react-navigation/stack';
import {
    ChangePasswordScreen,
    EditProfileScreen,
    CompletedTasksScreen,
    TaskScreen,
    TodayTasksScreen,
    CreateTaskScreen,
    EditTaskScreen,
    CreateCategoryScreen,
    DashboardScreen,
    SearchTaskScreen,
    UpcomingTasksScreen,
} from '../screens';
import { Routes } from '../constants';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export const appScreens = [
    {
        id: 1,
        name: Routes.Dashboard,
        component: DashboardScreen,
    },
    {
        id: 2,
        name: Routes.EditProfile,
        component: EditProfileScreen,
    },
    {
        id: 3,
        name: Routes.Tasks,
        component: TodayTasksScreen,
    },
    {
        id: 4,
        name: Routes.Task,
        component: TaskScreen,
    },
    {
        id: 5,
        name: Routes.CompletedTasks,
        component: CompletedTasksScreen,
    },
    {
        id: 6,
        name: Routes.ChangePassword,
        component: ChangePasswordScreen,
    },
    {
        id: 7,
        name: Routes.CreateTask,
        component: CreateTaskScreen,
    },
    {
        id: 8,
        name: Routes.CreateCategory,
        component: CreateCategoryScreen,
    },
    {
        id: 9,
        name: Routes.EditTask,
        component: EditTaskScreen,
    },
    {
        id: 10,
        name: Routes.Search,
        component: SearchTaskScreen,
    },
    {
        id: 10,
        name: Routes.Upcoming,
        component: UpcomingTasksScreen,
    },
];

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
                {appScreens.map(({ id, name, component }) => (
                    <Stack.Screen key={id} name={name} component={component} />
                ))}
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default AppStack;
