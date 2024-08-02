/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#031817',
        'background': '#f7fefd',
        'primary': '#2ee2d1',
        'secondary': '#83abee',
        'accent': '#5364e7',
       },
    },
  },
};
