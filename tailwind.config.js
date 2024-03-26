const plugin = require("tailwindcss/plugin");

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
        "primary-teal": "var(--primary-teal)",
        "primary-coral": "var(--primary-coral)",
        "primary-white": "var(--primary-white)",
        "secondary-green-light": "var(--secondary-green-light)",
        "secondary-green-medium": "var(--secondary-green-medium)",
        "secondary-green-dark": "var(--secondary-green-dark)",
        "secondary-green-darker": "var(--secondary-green-darker)",
        "secondary-green-darkest": "var(--secondary-green-darkest)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective-full": {
          perspective: "1000px",
        },
      });
    }),
  ],
};
