import { StackNavigationProp } from '@react-navigation/stack';

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
    Task: undefined;
    CompletedTasks: undefined;
    CreateCategory: undefined;
    EditTask: undefined;
    Search: undefined;
    Upcoming: undefined;
    // Add other screen names and their params here
};

export type Navigation = StackNavigationProp<RootStackParamList>;
