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
    tmpTemplates: `${TMP}templates/`
};
