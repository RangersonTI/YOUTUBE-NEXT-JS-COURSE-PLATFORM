
const config = {
  content:["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors:{
        text: 'var(--color-text)',
        error: 'var(--color-error)',
        paper: 'var(--color-paper)',
        primary: 'var(--color-primary)',
        backgroud: 'var(--color-backgroud)',
        'primary-contrast': 'var(--color-primary)'
      }
    }
  },
  plugins: {
    "@tailwindcss/postcss":{}
  },
};

export default config;