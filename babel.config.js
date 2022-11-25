module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components/index.ts',
            '@database': './src/database'
          }
        }
      ]
    ]
  };
};

/*
- https://zohaib.me/using-path-aliases-in-react-native-typescript-created-with-expo/
- https://gist.github.com/ChronSyn/ffca12630eb36c71465a1c5d7149a6ae
- all entries under alias must be also in tsconfig.json
- for aliasing dynamic files e.g <folder>/<file>, see the database entry in both babel.config.js and tsconfig.json
*/
