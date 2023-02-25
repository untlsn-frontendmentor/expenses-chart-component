module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        c: {
          creamy: '#F7E9DC',
          orange: '#EB755D',
          cyan: '#76B5BC',
          brown: '#392314',
          dust: '#A99E99',
        },
      },
    },
  },
  plugins: [],
};
