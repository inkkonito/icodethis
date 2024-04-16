/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        '_grey': "#F4F7FB",
        '_purple': "#2C2446",
        '_blue': "#86A5D2",
      },
      ringWidth: {
        '10': '10px',
      }
    },
  },
  plugins: [],
};

