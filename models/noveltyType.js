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

var mongoose    = require('mongoose');

/**
 * Define 'NoveltyType' schema.
 */

var NoveltyTypeSchema = new mongoose.Schema({
    name:               String,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'NoveltyType'.
 */

module.exports.NoveltyType = mongoose.model('NoveltyType', NoveltyTypeSchema);