'use strict';
const imagemin = require('imagemin');
const ImageminSharp = require('./imagemin-sharp');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminSharp = new ImageminSharp();

(async () => {
    const files = await imagemin(['images/*.{jpg,png}'], 'build/images', {
        plugins: [
            imageminSharp.resize({ width: 250, height: 250}),
            imageminJpegtran({progressive: true}),
            imageminPngquant({quality: '65-80'})
        ]
    });
    console.log(files);
})();