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

/**
 * Define 'TimelineEventType' schema.
 */

var TimelineEventTypeSchema = new mongoose.Schema({
    name:               String,
    color:              String,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'TimelineEventType'.
 */

module.exports.TimelineEventType = mongoose.model('TimelineEventType', TimelineEventTypeSchema);