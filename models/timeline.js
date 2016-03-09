/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

// Load required packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BranchOffice = require('./branchOffice').BranchOffice;
var TimelineEventType = require('./timelineEventType').TimelineEventType;
var User = require('./user').User;
var Employee = require('./employee').Employee;

// Define Timeline Schema
var TimelineSchema = new Schema({
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

module.exports.Timeline = mongoose.model('Timeline',TimelineSchema);