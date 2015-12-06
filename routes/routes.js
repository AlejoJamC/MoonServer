/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * setupRouter
 *
 * @description  Configure all routes on express router
 *
 * @param {express}      app      The application server
 */
function setupRouter (app){
    // Initialize all routes
    var indexRoutes = require('./index');
    var brachOfficeRoutes = require('./branchOffice');

    // Assigned routes
    // Index
    app.use('/', indexRoutes);
    app.use('/', brachOfficeRoutes);
}
// Export setup function
module.exports.setupRouter = setupRouter;