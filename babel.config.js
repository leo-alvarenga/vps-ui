module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-typescript',
      '@babel/react',
      [
        '@babel/env',
        {
          modules: false,
          targets: {
            node: '12',
            browsers: ['last 2 versions'],
          },
        },
      ],
    ],
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          pure: true,
          displayName: true,
          fileName: false,
        },
      ],
    ],
    ignore: [
      'node_modules',
      'build',
      'tutorials',
      '**/*.stories.*',
      '**/__tests__',
      '**/__mocks__',
      '**/test-utils',
    ],
  };
};
