import { User } from './user';

export interface AuthPayload {
    email: string;
    password: string;
}

export interface GoogleAuthPayload {
    token: string;
}

export enum AuthType {
    REGISTER = 'register',
    LOGIN = 'login',
    GOOGLE = 'google',
}

export interface ChangePasswordPayload {
    password: string;
    new_password: string;
}

export interface IAuthSlice {
    auth: {
        token: Promise<string | null> | string | null;
        isInitialized: boolean;
        isAuthenticated: boolean;
        loading: boolean;
        user: User | null;
        error: string | null;
        message: string | null;
        setIsInitialized: () => Promise<void>;
        setLoading: (value: boolean) => void;
        clearError: () => void;
        clearMessage: () => void;
    };
    reset: {
        otp: string;
        message: string | null;
        loading: boolean;
        success: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        setOtp: (otp: string) => void;
        clearError: () => void;
        clearMessage: () => void;
    };
    forgot: {
        loading: boolean;
        success: boolean;
        error: string | null;
        message: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
        clearMessage: () => void;
    };
    verify: {
        message: string | null;
        loading: boolean;
        success: boolean;
        error: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
        clearMessage: () => void;
    };
    change: {
        loading: boolean;
        success: boolean;
        error: string | null;
        message: string | null;
        setLoading: (value: boolean) => void;
        clearError: () => void;
        clearMessage: () => void;
    };
    registerOrLogin: (data: AuthPayload | GoogleAuthPayload, type: AuthType) => Promise<void>;
    getCurrentUser: () => Promise<void>;
    logout: () => Promise<void>;
    resetPassword: (otp: string, password: string) => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    verifyEmail: (otp: string) => Promise<void>;
    changePassword: (data: ChangePasswordPayload) => Promise<void>;
}
