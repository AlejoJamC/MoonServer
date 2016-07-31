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
var NoveltyType     = require('./noveltyTypes').NoveltyType;
var Employee        = require('./employees').Employee;
var Contract        = require('./contracts').Contract;
var NoveltyState    = require('./noveltyStates').NoveltyState;

/**
 * Define 'Novelty' schema.
 */

var NoveltySchema = new mongoose.Schema({
    type:               [NoveltyType.schema],
    employee:           [Employee.schema],
    contract:           [Contract.schema],
    initialDate:        Date,
    finalDate:          Date,
    value:              Number,
    detail:             String,
    observation:        String,
    attachedFile:       String,
    state:              [NoveltyState.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'Novelty'.
 */

module.exports.Novelty = mongoose.model('Novelty', NoveltySchema);