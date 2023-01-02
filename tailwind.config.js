/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./strogare/framework/views/*php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
