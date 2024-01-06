import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,css}',
        './index.html',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [nextui(), require('tailwindcss-animated')],
} satisfies Config;
