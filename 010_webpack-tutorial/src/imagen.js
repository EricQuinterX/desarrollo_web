const img01 = require('./images/webpack-logo.png');
const Webpack_logo = `<img src="${img01}">`;

const img02 = require('./images/file-loader-logo.png');
const FileLoader_logo = `<img src="${img02}">`;

//export default {Webpack_logo, FileLoader_logo};
const Image = {
    webpack: Webpack_logo,
    file_loader: FileLoader_logo
};

export default Image;