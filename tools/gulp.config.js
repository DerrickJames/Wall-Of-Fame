export const ROOT = './';
export const ROOT_SRC = `${ROOT}src/`;
export const APP_SRC = `${ROOT_SRC}app/`;
export const TMP = `${ROOT}.tmp/`;

export const CONFIG = {
    less: `${ROOT_SRC}styles/styles.less`,
    jade: [
        `${ROOT_SRC}*.jade`,
        `${APP_SRC}**.jade`
    ],
    tmpCss: `${TMP}styles/`,
    tmpTemplates: `${TMP}templates/`,
    build: `./build/`,
    fonts: `./bower_components/font-awesome/fonts/**/*.*`,
    images: `${ROOT_SRC}images/**/*.*`,
    index: `${ROOT_SRC}index.html`,
    js: [

    ],

    /**********************************
     * Bower and NPM locations
     *********************************/
    bower: {
        bowerJson: require('../bower.json'),
        directory: '../bower_components',
        ignorePath: '../..'
    }
};

export function getWiredepDefaultOptions() {
    var options = {
        bowerJson: CONFIG.bower.bowerJson,
        directory: CONFIG.bower.directory,
        ignorePath: CONFIG.bower.ignorePath
    };

    return options;
}
