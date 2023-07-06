/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FetchResponse {
    response: Response;
    result: any;
    error: boolean;
}

export interface RequestHeaders {
    [key: string]: string;
}

export type RequestBody = any;

export enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export interface RequestConfig {
    method: RequestMethod;
    body?: string;
    headers: RequestHeaders;
}
