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

var mongoose = require('mongoose');
var BranchOffice = require('./branchOffices').BranchOffice;
var TimelineEventType = require('./timelineEventType').TimelineEventType;
var User = require('./user').User;
var Employee = require('./employees').Employee;

/**
 * Define 'Timeline' schema.
 */

var TimelineSchema = new mongoose.Schema({
    level:              String,
    branchOffice:       [BranchOffice.schema],
    user:               [User.schema],
    employee:           [Employee.schema],
    type:               [TimelineEventType.schema],
    message:            String,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'Timeline'.
 */

module.exports.Timeline = mongoose.model('Timeline',TimelineSchema);