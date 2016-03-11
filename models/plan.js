/**
 * Copyright (c) 2016-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var PlanSchema = new Schema({
    name:               String,
    price:              Number,
    SMSLimit:           Number,
    EmailLimit:         Number,
    VoiceLimit:         Number,
    UsersLimit:         Number,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

module.exports.Plan = mongoose.model('Plan',PlanSchema);