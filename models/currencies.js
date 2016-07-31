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

/**
 * Define 'Currency' schema.
 */

var CurrencySchema = new mongoose.Schema({
    name        : {
        type        : String,
        required    : true,
        unique      : true
    },
    status      : {
        type        : Boolean,
        default     : true
    }
}, {
    timestamps  : true
});

/**
 * Expose 'Currency'.
 */

module.exports.Currency = mongoose.model('Currency', CurrencySchema);