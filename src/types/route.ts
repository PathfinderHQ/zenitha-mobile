import { StackNavigationProp } from '@react-navigation/stack';
import { Task } from './task';

export type RootStackParamList = {
    Register: undefined;
    Splash: undefined;
    Login: undefined;
    Reset: undefined;
    Forgot: undefined;
    Verify: undefined;
    ResetOtp: undefined;
    Fab: undefined;
    Dashboard: undefined;
    EditProfile: undefined;
    CreateTask: undefined;
    ChangePassword: undefined;
    Tasks: undefined;
    Task: {
        task: Task;
    };
    CompletedTasks: undefined;
    CreateCategory: undefined;
    EditTask: {
        task: Task;
    };
    Search: undefined;
    Upcoming: undefined;
    // Add other screen names and their params here
};

export type Navigation = StackNavigationProp<RootStackParamList>;
