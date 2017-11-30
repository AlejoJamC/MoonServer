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

var mongoose    = require('mongoose');
var Country     = require('./countries').Country;

/**
 * Define 'State' schema.
 */

var StateSchema = new mongoose.Schema({
    name        : {
        type        : String,
        required    : true
    },
    country     : [Country.schema],
    status      : {
        type        : Boolean,
        default     : true
    }
}, {
    timestamps  : true
});

/**
 * Expose 'State'.
 */

module.exports.State = mongoose.model('State', StateSchema);