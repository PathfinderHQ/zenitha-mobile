module.exports = {
    preset: 'jest-expo',
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['./jest-setup.ts'],
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|@react-navigation|@rneui)/)',
        '/node_modules/(?!(@react-native|react-native)/).*/',
    ],
};
