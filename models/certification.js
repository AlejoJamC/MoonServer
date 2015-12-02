/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var Contract    = require('./contract').Contract;
var Employee    = require('./employee').Employee;

// Define Certification schema
var CertificationSchema = new Schema({
    name:               String,
    employee:           [Employee.schema],
    contract:           [Contract.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

// Export the mongoose model
module.exports.Certification = mongoose.model('Certification', CertificationSchema);