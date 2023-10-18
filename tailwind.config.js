/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fcf6fd',
                    100: '#f9ebfc',
                    200: '#f3d6f8',
                    300: '#ebb6f1',
                    400: '#e08be7',
                    500: '#cf5dd8',
                    600: '#ba44c1',
                    700: '#97309b',
                    800: '#7d297f',
                    900: '#682768',
                    950: '#440e44',
                },
                secondary: {
                    50: '#fcf6fd',
                    100: '#f9ebfc',
                    200: '#f3d6f8',
                    300: '#ebb6f1',
                    400: '#e08be7',
                    500: '#cf5dd8',
                    600: '#ba44c1',
                    700: '#97309b',
                    800: '#7d297f',
                    900: '#682768',
                    950: '#440e44',
                },
            },
        },
    },
    plugins: [],
};
