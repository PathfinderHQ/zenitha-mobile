import { MD3LightTheme as DefaultTheme, MD3Theme } from 'react-native-paper';

export const theme: MD3Theme = {
    ...DefaultTheme, // or MD3DarkTheme
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#000',
        secondary: '#fff',
        tertiary: '#a1b2c3',
        secondaryContainer: '#ffffff',
    },
};
