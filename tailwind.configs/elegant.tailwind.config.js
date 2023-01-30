const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],

                // "Josefin Sans" is the font I decided to got for with "elegant",
                // but it *only* looks good in UPPERCASE.
                // It looks tacky in lowercase. I'll keep looking at some point.
                elegant: ["Josefin Sans", ...defaultTheme.fontFamily.sans],

                display: ["Red Hat Display", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
