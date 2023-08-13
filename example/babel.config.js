const path = require('path');
const pak = require('../package.json');

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            // For development, we want to alias the library to the source
            [pak.name]: path.join(__dirname, '..', pak.source),
            $navigation: path.join(__dirname, 'src/navigation'),
            $components: path.join(__dirname, 'src/components'),
            $constants: path.join(__dirname, 'src/shared/constants'),
            $hooks: path.join(__dirname, 'src/shared/hooks'),
            $libs: path.join(__dirname, 'src/shared/libs'),
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
