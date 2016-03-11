/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var Module      = require('./module').Module;

var PermissionSchema = new Schema({
    name:               String,
    module:             [Module.schema],
    read:               Boolean,
    create:             Boolean,
    update:             Boolean,
    delete:             Boolean,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

module.exports.Permission = mongoose.model('Permission',PermissionSchema);