const fontkit = require('fontkit');

let font = fontkit.openSync(`${__dirname}/../assets/fonts/KeplerStd-Bold.otf`);

let run = font.layout('Hello, World!');