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

export interface UpdateProfilePayload {
    first_name: string;
    last_name: string;
}
// API_BASE_URL=https://zenitha-staging.fly.dev
// FIREBASE_API_KEY=AIzaSyBE3XnANpxY7-HFgux8qapca1Axq-H-xhM
// FIREBASE_AUTH_DOMAIN=zenitha-9ccdc.firebaseapp.com
// FIREBASE_PROJECT_ID=zenitha-9ccdc
// FIREBASE_STORAGE_BUCKET=zenitha-9ccdc.appspot.com
// FIREBASE_MESSAGING_SENDER_ID=98746928037
// FIREBASE_APP_ID=1:98746928037:web:a9b505871c243fdf78b64c
// FIREBASE_MEASUREMENT_ID=G-1KX19EWRW9
// EAS_PROJECT_ID=39049e9e-c8ed-444f-86c7-5553bbb1afd4
// ANDROID_CLIENT_ID=388503395910-as4g45qi179pjnih1kkn2d9bnirrn8hp.apps.googleusercontent.com
// EXPO_CLIENT_ID=388503395910-88j9tu36jjjfjq9uu8s19ij79osnev9t.apps.googleusercontent.com
