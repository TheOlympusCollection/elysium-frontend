import { createContext } from 'react';

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export interface ITheme {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ITheme>({
    theme: Theme.Dark,
    setTheme: () => {},
});

export default ThemeContext;
