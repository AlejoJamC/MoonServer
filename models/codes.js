/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
// TODO: encriptar value que es el codigo de autorizacion

/**
 * Define 'Code' schema.
 */

var CodeSchema = new mongoose.Schema({
    value       : {
        type: String,
        required: true
    },
    redirectUri : {
        type: String,
        required: true
    },
    userId      : {
        type: String,
        required: true
    },
    clientId    : {
        type: String,
        required: true
    }
}, {
    timestamps  : true
});

/**
 * Expose 'Code'.
 */

module.exports.Code = mongoose.model('Code', CodeSchema);