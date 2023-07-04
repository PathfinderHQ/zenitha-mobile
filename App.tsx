import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { RootStackParamList } from './src/types';
import {
    DashboardScreen,
    ForgotPasswordScreen,
    LoginScreen,
    ResetPasswordScreen,
    RegisterScreen,
    SplashScreen,
    VerifyEmailScreen,
    ResetOtpScreen,
    ViewTodayTasksScreen,
    TaskDetailScreen,
} from './src/screens';
import { AuthProvider } from './src/contexts/AuthContext';
import { AuthRoutes, navigationRef, Routes } from './src/constants';

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <AuthProvider>
                    <Stack.Navigator>
                        <Stack.Screen
                            name={AuthRoutes.Splash}
                            component={SplashScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={AuthRoutes.Register}
                            component={RegisterScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={AuthRoutes.Login}
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={AuthRoutes.Forgot}
                            component={ForgotPasswordScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={AuthRoutes.Reset}
                            component={ResetPasswordScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={AuthRoutes.Verify}
                            component={VerifyEmailScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={AuthRoutes.ResetOtp}
                            component={ResetOtpScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={Routes.Dashboard}
                            component={DashboardScreen}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name={Routes.ViewTodayTasks}
                            component={ViewTodayTasksScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={Routes.ViewDetail}
                            component={TaskDetailScreen}
                            options={{ headerShown: false }}
                        />

                        {/* Add other screens here */}
                    </Stack.Navigator>
                </AuthProvider>
            </NavigationContainer>
            <Toast />
        </>
    );
};

export default App;
