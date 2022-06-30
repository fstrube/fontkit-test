const path = require('path');

module.exports = function(fontkit) {
    let fonts = [
        `${__dirname}/assets/fonts/ACaslonPro-Bold.otf`,
        `${__dirname}/assets/fonts/ACaslonPro-BoldItalic.otf`,
        `${__dirname}/assets/fonts/ACaslonPro-Italic.otf`,
        `${__dirname}/assets/fonts/ACaslonPro-Regular.otf`,
        `${__dirname}/assets/fonts/ACaslonPro-Semibold.otf`,
        `${__dirname}/assets/fonts/Franklin-Gothic-Book.ttf`,
        `${__dirname}/assets/fonts/HelveticaNeue-Bold.otf`,
        `${__dirname}/assets/fonts/HelveticaNeue-BoldItalic.otf`,
        `${__dirname}/assets/fonts/HelveticaNeue-Italic.otf`,
        `${__dirname}/assets/fonts/HelveticaNeue-Regular.otf`,
        `${__dirname}/assets/fonts/ITCFranklinGothicStd-Demi.otf`,
        `${__dirname}/assets/fonts/KeplerStd-Bold.otf`,
        `${__dirname}/assets/fonts/KeplerStd-BoldIt.otf`,
        `${__dirname}/assets/fonts/KeplerStd-Italic.otf`,
        `${__dirname}/assets/fonts/KeplerStd-Regular.otf`,
        `${__dirname}/assets/fonts/KeplerStd-Semibold.otf`,
    ];

    for (let font of fonts) {
        try {
            fontkit.openSync(font).layout('Hello, World!');
            console.log(path.basename(font), '... Success');
        } catch (e) {
            console.log(path.basename(font), '... \x1b[31mFail\x1b[0m');
            console.error(e);
        }
    }
}