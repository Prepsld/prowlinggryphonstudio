/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        prowling: {
          "primary": "#43BADB",
          "secondary": "#F92C90",
          "accent": "#9C6B9E",
          "neutral": "#322833",
          "base-100": "#3C3242",
          "info": "#4FCFF2",
          "success": "#F7E031",
          "warning": "#e1a60e",
          "error": "#e94e4e",
        },
    },
    ],
  },
  plugins: [require("daisyui")],
}
