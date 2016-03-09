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

// Define User Schema
// TODO: Finalizar este modelo de datos
var UserSchema = new Schema({
    name:               String,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

module.exports.User = mongoose.model('User',UserSchema);