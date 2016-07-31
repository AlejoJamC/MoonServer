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

var mongoose    = require('mongoose');

var Department = require('./department').Department;

/**
 * Define 'Job' schema.
 */

var JobSchema = new mongoose.Schema({
    name:               String,
    department:         [Department.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'Job'.
 */

module.exports.Job = mongoose.model('Job', JobSchema);