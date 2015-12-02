/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var TypeNovelty     = require('./typeNovelty').TypeNovelty;
var Employee        = require('./employee').Employee;
var Contract        = require('./contract').Contract;
var StateNovelty    = require('./stateNovelty').StateNovelty;

// Define Employee schema
var NoveltySchema = new Schema({
    type:               [TypeNovelty.schema],
    employee:           [Employee.schema],
    contract:           [Contract.schema],
    initialDate:        Date,
    finalDate:          Date,
    value:              Number,
    detail:             String,
    observation:        String,
    attachedFile:       String,
    state:              [StateNovelty.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

// Export the mongoose model
module.exports.Novelty = mongoose.model('Novelty', NoveltySchema);