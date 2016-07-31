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

var mongoose        = require('mongoose');
var BranchOffice    = require('./branchOffices').BranchOffice;

/**
 * Define 'Department' schema.
 */

var DepartmentSchema = new mongoose.Schema({
    name:               String,
    branchOffice:       [BranchOffice.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'Department'.
 */

module.exports.Department = mongoose.model('Department', DepartmentSchema);