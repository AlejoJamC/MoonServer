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
    var brachOfficeRoutes   = require('./branchOffice');
    var certificationRoutes = require('./certification');
    var companyRoutes       = require('./company');
    var compensationRoutes  = require('./compensationFund');
    var contractRoutes      = require('./contract');
    var dashboardRoutes     = require('./dashboard');
    var departmentRoutes    = require('./department');
    var employeeRoutes      = require('./employee');
    var healthcareRoutes    = require('./healthcare');
    var indexRoutes         = require('./index');
    var jobRoutes           = require('./job');
    var laborRiskRoutes     = require('./laborRiskInsurance');
    var moduleRoutes        = require('./module');
    var noveltyRoutes       = require('./novelty');
    var parameterRoutes     = require('./parameter');
    var permissionRoutes    = require('./permission');
    var sectionRoutes       = require('./section');
    var timelineRoutes      = require('./timeline');
    var userRoutes          = require('./user');

    // Assigned routes
    // Index
    app.use('/', indexRoutes);
    // Dashboard
    app.use('/', dashboardRoutes);
    app.use('/', timelineRoutes);
    // > Company
    //app.use('/', brachOfficeRoutes);
    //app.use('/', companyRoutes);
    //app.use('/', departmentRoutes);
    //app.use('/', jobRoutes);
    // > Contract
    //app.use('/', contractRoutes);
    // > Employee
    //app.use('/', certificationRoutes);
    //app.use('/', compensationRoutes);
    //app.use('/', employeeRoutes);
    //app.use('/', healthcareRoutes);
    //app.use('/', laborRiskRoutes);
    //app.use('/', noveltyRoutes);
    // > Settings
    app.use('/', moduleRoutes);
    app.use('/', sectionRoutes);
    //app.use('/', parameterRoutes);
    //app.use('/', permissionRoutes);
    // > User
    app.use('/', userRoutes);

}
// Export setup function
module.exports.setupRouter = setupRouter;