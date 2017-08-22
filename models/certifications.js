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
var Contract    = require('./contracts').Contract;
var Employee    = require('./employees').Employee;

/**
 * Define 'Certification' schema.
 */

var CertificationSchema = new mongoose.Schema({
    name:               String,
    employee:           [Employee.schema],
    contract:           [Contract.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'Certification'.
 */

module.exports.Certification = mongoose.model('Certification', CertificationSchema);