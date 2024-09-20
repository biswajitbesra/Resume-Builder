/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        width: {
            "cus-49": "49rem",
            "cus-44": "44rem"
        },
        height: {
            "cus-70": "70.2rem"
        }
      },
    },
    plugins: [],
  }