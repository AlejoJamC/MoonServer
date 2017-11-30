/**
 * Copyright (c) 2017-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var mongoose    = require('mongoose');
var Section     = require('./sections').Section;

/**
 * Define 'Module' schema.
 */

var ModuleSchema = new mongoose.Schema({
    name:               String,
    section:            [Section.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'Module'.
 */

module.exports.Module = mongoose.model('Module',ModuleSchema);