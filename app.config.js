import 'dotenv/config';

export default {
    expo: {
        name: 'zenitha-mobile',
        owner: 'pathfinder_zenitha',
        slug: 'zenitha-mobile',
        scheme: 'zenitha-mobile',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/logo.png',
        userInterfaceStyle: 'light',
        splash: {
            image: './assets/logo_x4.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
            package: 'com.zenitha.pathfinder',
            googleServicesFile: './google-services.json',
        },
        web: {
            favicon: './assets/favicon.png',
        },
        notification:{
            icon: './assets/logo_x0.4.png',
            color:'#ffffff',
        },
        extra: {
            apiBaseUrl: process.env.API_BASE_URL,
            firebaseApiKey: process.env.FIREBASE_API_KEY,
            firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
            firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
            firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            firebaseAppId: process.env.FIREBASE_APP_ID,
            measurementId: process.env.FIREBASE_MEASUREMENT_ID,
            eas: {
                projectId: process.env.EAS_PROJECT_ID,
            },
        },
        plugins: [
            [
                'expo-image-picker',
                {
                    photosPermission: 'The app accesses your photos to let you share them with your friends.',
                },
            ],
        ],
    },
};
