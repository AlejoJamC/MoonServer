/**
 * Copyright (c) 2017-present, Alejandro Mantilla <@AlejoJamC>.
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
 * Define 'NoveltyState' schema.
 */

var NoveltyStateSchema = new mongoose.Schema({
    name:               String,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'NoveltyState'.
 */

module.exports.NoveltyState = mongoose.model('NoveltyState', NoveltyStateSchema);