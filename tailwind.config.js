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
            "cus-44": "44rem",
            "cus-41": "41rem",
            "cus-37": "37rem",
            "cus-36": "36rem",
            "cus-32": "32rem",
            "cus-31": "31rem",
            "cus-26": "26rem",
            "pdf-49.6":  "49.6rem",
            "pdf-47.6":  "47.6rem",
        },
        height: {
            "pdf-70.16":  "70.16rem",
            "pdf-68.16":  "68.16rem",
        }
      },
    },
    plugins: [],
  }