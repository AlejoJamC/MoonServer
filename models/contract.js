/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContractType            = require('./contractType').ContractType;
var ContractState           = require('./contractState').ContractState;
var TerminationContractType = require('./terminationContractType').TerminationContractType;

// Define Contract schema
var ContractSchema = new Schema({
    typeContract:       [ContractType.schema],
    stateContract:      [ContractState.schema],
    terminationType:    [TerminationContractType.schema],
    initialDate:        Date,
    finalDate:          Date,
    attachedFile:       String,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

// Export the mongoose model
module.exports.Contract = mongoose.model('Contract', ContractSchema);