const path = require('path'); // Node.js стандартный модуль для разрешения путей файлов
// const webpack = require('webpack'); // для получения доступа к встроенным плагинам

module.exports = {
  entry: './src/index.js', // точка входа
  output: { // имя выходного файла бандла, и куда его сохранить
    path: path.resolve(__dirname, 'dist'), // каталог для результатов сборки (записывается в абсолютном формате, для этого исп.resolve(__dirname,)
    filename: 'main.js', // имя файла с результатами сборки
  },
  mode: 'production',
  // mode: 'development',
  module: {

  },
  plugins: [

  ],
};
