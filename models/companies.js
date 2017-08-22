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
 * Define 'Company' schema.
 */

var CompanySchema = new mongoose.Schema({
    name:               String,
    identification:     String,
    address:            String,
    telephone:          String,
    email:              String,
    contact:            String,
    ContactTelephone:   String,
    creationDate:       Date,
    lastEditionDate:    Date,
    enabled:            Boolean
});

/**
 * Expose 'Company'.
 */

module.exports.Company = mongoose.model('Company', CompanySchema);