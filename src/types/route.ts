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
    Homepage: undefined;
    Profile: undefined;
    EditProfile: undefined;
    CreateTask: undefined;
    ChangePassword: undefined;
    ViewTodayTasks: undefined;
    ViewDetail: undefined;
    SearchTasks: undefined;
    CreateCategory: undefined;
    // Add other screen names and their params here
};

export type Navigation = StackNavigationProp<RootStackParamList>;
