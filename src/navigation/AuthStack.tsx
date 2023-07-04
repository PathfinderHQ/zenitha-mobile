import {
    ForgotPasswordScreen,
    LoginScreen,
    RegisterScreen,
    ResetOtpScreen,
    ResetPasswordScreen,
    SplashScreen,
    VerifyEmailScreen,
} from '../screens';
import { AuthRoutes } from '../constants';

export const authScreens = [
    {
        id: 1,
        name: AuthRoutes.Splash,
        component: SplashScreen,
    },
    {
        id: 2,
        name: AuthRoutes.Register,
        component: RegisterScreen,
    },
    {
        id: 3,
        name: AuthRoutes.Login,
        component: LoginScreen,
    },
    {
        id: 4,
        name: AuthRoutes.Forgot,
        component: ForgotPasswordScreen,
    },
    {
        id: 4,
        name: AuthRoutes.Reset,
        component: ResetPasswordScreen,
    },
    {
        id: 5,
        name: AuthRoutes.Verify,
        component: VerifyEmailScreen,
    },
    {
        id: 6,
        name: AuthRoutes.ResetOtp,
        component: ResetOtpScreen,
    },
];
