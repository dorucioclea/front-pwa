module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        stage: 1,
        features: {
          'focus-within-pseudo-class': false,
        },
      },
    ],
    // [ TODO: getting nextjs maximum callstack exceeded in dev mode, check this later
    //   'cssnano',
    //   {
    //     preset: 'default',
    //   },
    // ],
  ],
}
