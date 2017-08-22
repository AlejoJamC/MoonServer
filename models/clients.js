/**
 * Copyright (c) 2017-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
// TODO: encriptar el secret

/**
 * Define 'Client' schema.
 */

var ClientSchema = new mongoose.Schema({
    name    : {
        type : String,
        unique : true,
        required: true
    },
    id      : {
        type: String,
        required : true
    },
    secret  : {
        type : String,
        required : true
    },
    userId  : {
        type : mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps  : true
});

/**
 * Expose 'Client'.
 */

module.exports.Client = mongoose.model('Client', ClientSchema);