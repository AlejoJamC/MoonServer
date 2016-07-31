/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * Module dependencies.
 */

var mongoose    = require('mongoose');
var Plan        = require('./plan').Plan;
var User        = require('./user').User;
var Subscriber  = require('./user').User;
var Permission  = require('./permission').Permission;

/**
 * Define 'Parameter' schema.
 */

var ParameterSchema = new mongoose.Schema({
    name:               String,
    plan:               [Plan.schema],
    user:               [User.schema],
    subscriber:         [Subscriber.schema],
    permission:         [Permission.schema],
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'Parameter'.
 */

module.exports.Parameter = mongoose.model('Parameter',ParameterSchema);