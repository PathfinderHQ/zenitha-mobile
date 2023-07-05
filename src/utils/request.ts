/* eslint-disable @typescript-eslint/no-explicit-any */
import Constants from 'expo-constants';
import { headers } from '../constants';
import { setSession } from './secure_storage';
import { FetchResponse, RequestMethod, RequestConfig, RequestBody } from '../types';

export const makeRequest = async (
    endpoint: string,
    method: RequestMethod,
    data?: RequestBody,
): Promise<FetchResponse> => {
    try {
        const baseUrl = Constants.expoConfig?.extra?.apiBaseUrl;

        const config: RequestConfig = {
            method,
            headers,
        };

        if (data) config.body = JSON.stringify(data);

        const response = await fetch(`${baseUrl}/${endpoint}`, config);

        const result = await response.json();

        if (!response.ok) {
            return { response, result, error: true };
        }

        return { response, result, error: false };
    } catch (err) {
        const response = {} as any;
        const result = {} as any;
        return { error: true, response, result };
    }
};
