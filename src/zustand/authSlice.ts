/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { getSession, makeRequest, setSession } from '../utils';
import {
    AuthPayload,
    AuthType,
    ChangePasswordPayload,
    GoogleAuthPayload,
    IAuthSlice,
    RequestMethod,
    User,
} from '../types';

export const authSlice = create<IAuthSlice>((set, get) => ({
    auth: {
        token: null,
        isInitialized: false,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: null,
        message: null,
        setIsInitialized: async () => {
            const token = await getSession();

            set((state) => ({
                ...state,
                auth: {
                    ...state.auth,
                    token,
                    isAuthenticated: !!token,
                    isInitialized: true,
                },
            }));
        },
        setLoading: (value) => set((state) => ({ ...state, auth: { ...state.auth, loading: value } })),
        clearError: () =>
            set((state) => ({
                ...state,
                auth: {
                    ...state.auth,
                    error: null,
                },
            })),
        clearMessage: () =>
            set((state) => ({
                ...state,
                auth: {
                    ...state.auth,
                    message: null,
                },
            })),
    },
    reset: {
        otp: '',
        loading: false,
        success: false,
        error: null,
        message: null,
        setLoading: (value) => set((state) => ({ ...state, reset: { ...state.reset, loading: value } })),
        setOtp: (otp) => set((state) => ({ ...state, reset: { ...state.reset, otp } })),
        clearError: () => set((state) => ({ ...state, reset: { ...state.reset, error: null } })),
        clearMessage: () => set((state) => ({ ...state, reset: { ...state.reset, message: null } })),
    },
    forgot: {
        loading: false,
        success: false,
        error: null,
        message: null,
        setLoading: (value) => set((state) => ({ ...state, forgot: { ...state.forgot, loading: value } })),
        clearError: () => set((state) => ({ ...state, forgot: { ...state.forgot, error: null } })),
        clearMessage: () => set((state) => ({ ...state, forgot: { ...state.forgot, message: null } })),
    },
    verify: {
        message: null,
        loading: false,
        success: false,
        error: null,
        setLoading: (value: boolean) => set((state) => ({ ...state, verify: { ...state.verify, loading: value } })),
        clearError: () => set((state) => ({ ...state, verify: { ...state.verify, error: null } })),
        clearMessage: () => set((state) => ({ ...state, verify: { ...state.verify, message: null } })),
    },
    change: {
        message: null,
        loading: false,
        success: false,
        error: null,
        setLoading: (value: boolean) => set((state) => ({ ...state, change: { ...state.change, loading: value } })),
        clearError: () => set((state) => ({ ...state, change: { ...state.change, error: null } })),
        clearMessage: () => set((state) => ({ ...state, change: { ...state.change, message: null } })),
    },
    registerOrLogin: async (data: AuthPayload | GoogleAuthPayload, type) => {
        get().auth.setLoading(true);
        const url = type === AuthType.GOOGLE ? 'google/auth' : `${type}`;

        const { result, error } = await makeRequest(url, RequestMethod.POST, data);

        if (error) {
            await setSession();
            set((state) => ({
                ...state,
                auth: {
                    ...state.auth,
                    error: result?.message || 'An error occurred',
                    token: null,
                    isAuthenticated: false,
                    loading: false,
                },
            }));
            return;
        }

        // set token to localStorage
        await setSession(result.token);

        set((state) => ({
            ...state,
            auth: {
                ...state.auth,
                token: result.data.token,
                isAuthenticated: true,
                user: result.data.user,
                loading: false,
            },
        }));
    },
    getCurrentUser: async () => {
        get().auth.setLoading(true);

        const { error, result } = await makeRequest('user', RequestMethod.GET);

        if (error) {
            await setSession();
            set((state) => ({
                ...state,
                auth: {
                    ...state.auth,
                    user: null,
                    token: null,
                    isAuthenticated: false,
                    error: result?.message || 'An error occurred',
                    loading: false,
                },
            }));
            return;
        }

        set((state) => ({
            ...state,
            auth: {
                ...state.auth,
                user: result as User,
                loading: false,
            },
        }));
    },
    logout: async () => {
        await setSession();
        set((state) => ({
            ...state,
            auth: {
                ...state.auth,
                token: null,
                user: null,
                isAuthenticated: false,
            },
        }));
    },
    resetPassword: async (otp: string, password: string) => {
        get().reset.setLoading(true);
        const { error, result } = await makeRequest('reset_password', RequestMethod.POST, { otp, password });

        if (error) {
            set((state) => ({
                ...state,
                reset: {
                    ...state.reset,
                    error: result?.message || 'Unexpected error, Please try forgot password again',
                    loading: false,
                },
            }));

            return;
        }

        set((state) => ({
            ...state,
            reset: {
                ...state.reset,
                message: result.message,
                success: true,
                loading: false,
            },
        }));
    },
    forgotPassword: async (email: string) => {
        get().forgot.setLoading(true);
        const { error, result } = await makeRequest('forgot_password', RequestMethod.POST, { email });

        if (error) {
            set((state) => ({
                ...state,
                forgot: {
                    ...state.forgot,
                    error: result?.message || 'Unexpected error, Please try again',
                    success: false,
                    loading: false,
                },
            }));

            return;
        }

        set((state) => ({
            ...state,
            forgot: {
                ...state.forgot,
                message: 'Otp has been sent to your email',
                success: true,
                loading: false,
            },
        }));
    },
    verifyEmail: async (otp: string) => {
        get().verify.setLoading(true);
        const { error, result } = await makeRequest('verify_email', RequestMethod.POST, { otp });

        if (error) {
            set((state) => ({
                ...state,
                verify: {
                    ...state.verify,
                    error: result?.message || 'Unexpected error, Please try again',
                    success: false,
                    loading: false,
                },
            }));

            return;
        }

        set((state) => ({
            ...state,
            verify: {
                ...state.verify,
                message: 'Email verified',
                success: true,
                loading: false,
            },
        }));
    },
    changePassword: async (data: ChangePasswordPayload) => {
        get().change.setLoading(true);
        const { error, result } = await makeRequest('user/change_password', RequestMethod.POST, data);

        if (error) {
            set((state) => ({
                ...state,
                change: {
                    ...state.change,
                    error: result?.message || 'Unexpected error, Please try again',
                    success: false,
                    loading: false,
                },
            }));

            return;
        }

        set((state) => ({
            ...state,
            change: {
                ...state.change,
                message: 'Password changed',
                success: true,
                loading: false,
            },
        }));
    },
}));
