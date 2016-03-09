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

// Define Timeline Event Types schema
var TimelineEventTypeSchema = new Schema({
    name:               String,
    color:              String,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

module.exports.TimelineEventType = mongoose.model('TimelineEventType', TimelineEventTypeSchema);