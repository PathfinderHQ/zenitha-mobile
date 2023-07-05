import { MD3LightTheme } from 'react-native-paper';

export const theme = {
    ...MD3LightTheme, // or MD3DarkTheme
    roundness: 2,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#000',
        secondary: '#ccc',
        tertiary: '#a1b2c3',
    },
};
