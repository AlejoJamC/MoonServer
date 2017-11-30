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

var mongoose                = require('mongoose');
var ContractType            = require('./contractTypes').ContractType;
var ContractState           = require('./contractStates').ContractState;
var TerminationContractType = require('./terminationContractTypes').TerminationContractType;

/**
 * Define 'Contract' schema.
 */

var ContractSchema = new mongoose.Schema({
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

/**
 * Expose 'Contract'.
 */

module.exports.Contract = mongoose.model('Contract', ContractSchema);