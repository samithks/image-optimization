'use strict';

const sharp = require('sharp');

module.exports = class ImageminSharp {
    constructor(){
        this.sharp = sharp;
    }
    resize(options) {
        return buffer => {
            options = Object.assign({}, options);
            if (!Buffer.isBuffer(buffer)) {
                return Promise.reject(new TypeError('Expected a buffer'));
            }
            return this.sharp(buffer).resize(options.width, options.height).toBuffer().catch( err => {
                throw err;
            });
        }
    }
}

