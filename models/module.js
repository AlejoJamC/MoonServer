/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var Section     = require('./section').Section;

var ModuleSchema = new Schema({
    name:               String,
    section:            [Section.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

module.exports.Module = mongoose.model('Module',ModuleSchema);