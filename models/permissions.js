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
var Module      = require('./modules').Module;

/**
 * Define 'Permission' schema.
 */

var PermissionSchema = new mongoose.Schema({
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

/**
 * Expose 'Permission'.
 */

module.exports.Permission = mongoose.model('Permission',PermissionSchema);