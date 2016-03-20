/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var branchOfficeRouter = express.Router();


/* GET Branch Office page. */
// Routes /branch/offices
branchOfficeRouter.get('/sucursales', function (req, res) {
    res.render('dashboard/branchOffices/branchOffices', {
        title: 'Registro | Dynamite Docs',
        level: '../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Create Branch Office page. */
// Route /branch/offices/new
branchOfficeRouter.get('/sucursales/agregar', function (req, res) {
    res.render('dashboard/branchOffices/branchOffices', {
        title: 'Registro | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Update Branch Office page. */
// Route /branch/offices/:id
branchOfficeRouter.get('/sucursales/:id', function (req, res) {
    res.render('dashboard/branchOffices/branchEdit', {
        title: 'Registro | Dynamite Docs',
        level: '../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

/* GET Delete Branch Office page. */
// Route /branch/offices/:id/delete
branchOfficeRouter.get('/sucursales/:id/eliminar', function (req, res) {
    res.render('dashboard/branchOffices/branchDelete', {
        title: 'Registro | Dynamite Docs',
        level: '../../../',
        layout: 'dashboard/mainStruct',
        error: ''
    });
});

module.exports = branchOfficeRouter;