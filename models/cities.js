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
var State       = require('./states').State;

/**
 * Define 'City' schema.
 */

var CitySchema = new mongoose.Schema({
    name        : {
        type        : String,
        required    : true
    },
    state       : [State.schema],
    status      : {
        type        : Boolean,
        default     : true
    }
}, {
    timestamps  : true
});

/**
 * Expose 'City'.
 */

module.exports.City = mongoose.model('City', CitySchema);