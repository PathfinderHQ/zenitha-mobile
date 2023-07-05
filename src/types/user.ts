export enum SignInProvider {
    GOOGLE = 'google',
    CUSTOM = 'custom',
}

export interface User {
    id: string;
    first_name?: string;
    last_name?: string;
    email: string;
    sign_in_provider: SignInProvider;
    verified: boolean;
    created_at: Date;
    updated_at: Date;
}
