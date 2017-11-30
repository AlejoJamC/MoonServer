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
    var brachOfficeRoutes   = require('./branchOffices');
    var certificationRoutes = require('./certifications');
    var companyRoutes       = require('./companies');
    var compensationRoutes  = require('./compensationFunds');
    var contractRoutes      = require('./contracts');
    var dashboardRoutes     = require('./dashboard');
    var departmentRoutes    = require('./departments');
    var employeeRoutes      = require('./employees');
    var healthcareRoutes    = require('./healthcares');
    var indexRoutes         = require('./index');
    var jobRoutes           = require('./jobs');
    var laborRiskRoutes     = require('./laborRiskInsurances');
    var moduleRoutes        = require('./modules');
    var noveltyRoutes       = require('./novelties');
    var parameterRoutes     = require('./parameters');
    var permissionRoutes    = require('./permissions');
    var sectionRoutes       = require('./sections');
    var timelineRoutes      = require('./timelines');
    var userRoutes          = require('./users');

    // Assigned routes
    // Index
    app.use('/', indexRoutes);
    // Dashboard
    app.use('/', dashboardRoutes);
    app.use('/', timelineRoutes);
    // > Company
    app.use('/', brachOfficeRoutes);
    app.use('/', companyRoutes);
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