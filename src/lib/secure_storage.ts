/* eslint-disable @typescript-eslint/no-explicit-any,no-console */
import jwtDecode from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';
import { headers } from '../constants';

const KEY = 'accessToken';
const EXPO_TOKEN_KEY = 'expoToken';

// ----------------------------------------------------------------------
interface JwtPayload {
    iss: string;
    sub: string;
    exp: number;
    iat: number;
}

const isValidToken = (accessToken: string): boolean => {
    if (!accessToken) {
        return false;
    }
    const decoded = jwtDecode(accessToken) as JwtPayload;
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
};

const setSession = async (accessToken?: string): Promise<void> => {
    try {
        if (accessToken) {
            // add token to headers if exist
            await SecureStore.setItemAsync(KEY, accessToken);
            headers.Authorization = `Bearer ${accessToken}`;
        } else {
            // remove the access token from headers if not exist
            await SecureStore.deleteItemAsync(KEY);
            delete headers.Authorization;
        }
    } catch (err) {
        console.log('[SetSession Error]', err);
    }
};

const getSession = async (): Promise<string | null> => {
    try {
        return SecureStore.getItemAsync(KEY);
    } catch (err) {
        console.log('[GetSession Error]', err);
        return null;
    }
};

const getExpoToken = async (): Promise<string | null> => {
    try {
        return SecureStore.getItemAsync(EXPO_TOKEN_KEY);
    } catch (err) {
        console.log('[GetExpoToken Error]', err);
        return null;
    }
};

const setExpoToken = async (expoToken: string): Promise<void> => {
    try {
        await SecureStore.setItemAsync(EXPO_TOKEN_KEY, expoToken);
    } catch (err) {
        console.log('[SetExpoToken Error]', err);
    }
};

export { isValidToken, setSession, getSession, getExpoToken, setExpoToken };
